import React, { useState } from 'react';

function App() {

	const [isDarkMode, setIsDarkMode] = useState(false);

	const changeTheme = () => {
		setIsDarkMode(!isDarkMode);
		document.getElementsByTagName('body')[0].classList.toggle('dark');
	}

	const darkIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
		<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
	</svg>);
	const lightIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
		<path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z"/>
	</svg>);
	const getIcon = () => {
		return isDarkMode ? (
			<p id='toggle' onClick={changeTheme}>{lightIcon} Light Mode</p>
		) : (
			<p id='toggle' onClick={changeTheme}>{darkIcon} Dark Mode</p>
		)
	}

  return (
    <div id='main-content'>
		<p className='text-black dark:text-white max-w-xl text-center'>
			This website was made using Tailwindcss and ReactJS.
		</p>
		<p className='text-black dark:text-white max-w-xl text-center'>
			When clicking the button below, the class "dark" will be added to/removed from the "body" element in the html code
			and toggles the "state" of "isDarkMode"
		</p>
		<p className='text-black dark:text-white max-w-xl text-center'>
			To change the text color, or a background color when toggling dark mode,
			you can use the "dark" selector in the class. Example: "dark:text-white"; and then add a simple class "text-black" without "dark:" behind it.
		</p>
		<div className='bg-green-600 dark:bg-blue-600 p-8 py-4 rounded-2xl'>
			{isDarkMode ? 'Now its a blue color! click again for the green color!' : 'Its a green color! If you set to dark mode, it will be blue!'}
		</div>
		{getIcon()}
    </div>
  );
}

export default App;
