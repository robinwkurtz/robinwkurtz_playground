import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

import config from 'config';
import Navigation from 'navigation';
import Social from 'social';

import { toggleMenu } from 'menu';

import style from './index.scss';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.clickToggleMenu = this.clickToggleMenu.bind(this);
	}
	clickToggleMenu(e, dispatch) {
		e.preventDefault();
		return (
			 dispatch(toggleMenu())
		)
	}
	render() {
		const { dispatch, menu } = this.props
		return (
			<header className={ style.header }>
	            <div className="row full flush">
	                <div className="column float">
	                    <Link className={ style.logo } to="/">
	                        <div className="show-for-medium-up">
	                            { config.app.logo.full }
	                        </div>
	                        <div className="show-for-small-only">
	                            { config.app.logo.short }
	                        </div>
	                    </Link>
	                </div>
	                <div className="column float">
	                    <a
							href="#"
							onClick={ (e) => { this.clickToggleMenu(e, dispatch) } }
							className={ classNames(style.menubutton, (menu.open) ? style.isactive : '' ) }
						>
	                        <div className={ style.burger }>
	                            <div className={ style.burgericon }>Menu</div>
	                        </div>
	                    </a>
	                </div>
					<Social { ...this.props } />
	            </div>
	            <div className={ classNames(style.menu, (menu.open) ? style.isactive : '' ) }>
					<Navigation { ...this.props } />
	                <div className={ style.copyright }>
	                    Copyright
	                </div>
	            </div>
        	</header>
		)
	}
}
