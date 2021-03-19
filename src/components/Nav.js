import React, { Component } from 'react'

export default class Nav extends Component {
    constructor(){
        super();
        this.state = {
            menu: false,
        }
    }

    clickHandler = () => {
        this.setState({menu: !this.state.menu})
      };
        
    render() {
        const {menu} = this.state;
        return (
            <header>
                <div className='smallHeader'>
                <span className='bootstrap' >Start Bootstrap</span>
                <span className='navBtn' onClick={this.clickHandler}>Menu &#9776;</span>
                </div>
                <nav className={menu ? 'opened' : 'closed'}>
                        <p>About</p>
                        <p>Projects</p>
                        <p>Contact</p>
                </nav>
            </header>

        )
    }
}
