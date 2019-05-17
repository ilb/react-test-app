import React from 'react';
import PropTypes from 'prop-types';

function Header() {
	return (
		<header>
			<h3>Тестовое задание</h3>
			<p> Таблица с документами. </p>
			<p> Клик на заголовок для сортировки. </p>
			<p> Поисковая строка для поиска документа. </p>
			<p> Клик на название документа для открытия документа. </p>
		</header>
		)
}

Header.propTypes = {
	
};

export default Header;