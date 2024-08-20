import React, { useState } from "react";
import useThemeStore, { ThemePropertyKeys, ThemeType } from "../../stores/themeStore";

const NewTheme = () => {
    const { addTheme, themes } = useThemeStore();
    console.log(themes)

    // Initial state for new theme with default values
    const [newTheme, setNewTheme] = useState<ThemeType>({
        themeName: themes[0].themeName, // Default theme name (optional)
        background: 'bg-gray-200', // Default color (Tailwind class)
        text: 'text-gray-900', // Default text color (Tailwind class)
        primary: 'bg-blue-500', // Default primary color (Tailwind class)
        secondary: 'bg-gray-300', // Default secondary color (Tailwind class)
        accent: 'bg-green-500', // Default accent color (Tailwind class)
    });



    const colors = ['red', 'black', 'white', 'purple', 'gray', 'slate', 'pink', 'yellow', 'green', 'stone', 'zinc', 'sky', 'rose'];
    const themePropertyList: ThemePropertyKeys[] = [
        'background',
        'text',
        'primary',
        'secondary',
        'accent'
    ];

    const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

        // Update the theme state with color value in Tailwind format
        const { name, value } = e.target;
        setNewTheme((prevTheme) => ({
            ...prevTheme,
            [name]: value,
        }));
    };

    const handleThemeNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setNewTheme((prevTheme) => ({
            ...prevTheme,
            themeName: value,
        }));
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newTheme.themeName) {
            // Combine color values to form the complete theme
            const completeTheme: ThemeType = {
                themeName: newTheme.themeName,
                background: newTheme.background,
                text: newTheme.text,
                primary: newTheme.primary,
                secondary: newTheme.secondary,
                accent: newTheme.accent,
            };
            console.log('new theme is', completeTheme);
            addTheme(completeTheme);
            // updatePage(PageTypes.HOME);
        } else {
            console.error('Theme name is required');
        }
    };

    return (
        <div className="max-w-content p-6 bg-white border border-gray-200 rounded-lg shadow">
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <h2 className="text-lg font-semibold leading-7 text-gray-900">Create New theme</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600 mb-10">
                    Create a theme for your list items
                </p>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {themePropertyList.map((property) => (
                            <tr key={property}>
                                <td>{property}</td>
                                <td>
                                    <select
                                        name={property}
                                        onChange={handleColorChange}
                                        // value={newTheme[property] ? newTheme[property].split('-')[1] : ''}
                                        className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option selected>Choose a color</option>

                                        {colors.map((color) => (
                                            <option key={color} value={color}>
                                                {color}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="col-span-full mt-4">
                    <label htmlFor="themeName" className="block text-sm font-medium leading-6 text-gray-900">
                        Theme Name
                    </label>
                    <div className="mt-2">
                        <select
                            id="themeName"
                            name="themeName"
                            onChange={handleThemeNameChange}
                            value={newTheme.themeName || ''}
                            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Select a theme name</option>
                            {themes.map((theme) => (
                                <option key={theme.themeName} value={theme.themeName}>
                                    {theme.themeName}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <button type="submit" className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                    Create Theme
                </button>
            </form>
        </div>
    );
};

export default NewTheme;
