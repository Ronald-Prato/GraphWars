import React, { useState } from 'react'
import * as st from './Header.styles'
import { Menu, Dropdown, Icon } from 'antd';
import '../../OcasionalStyles.css'


export const Header = () => {
    const [Language, setLanguage] = useState("Español")


    const menu = (
        <Menu>
            <Menu.Item onClick={() => setLanguage('English')}>
                <a>English</a>
            </Menu.Item>
            <Menu.Item onClick={() => setLanguage('Español')}>
                <a>Español</a>
            </Menu.Item>
            <Menu.Item onClick={() => { setLanguage('한국어') }}>
                <a>한국어</a>
            </Menu.Item>
        </Menu>
    )

    return (
        <st.HeaderMainContainer>
            <st.HeaderList>
                <st.HeaderListItem> <p className='pink'>Graph </p>  <p className='gray'> Wars</p> </st.HeaderListItem>
                <st.HeaderListItem> Personajes </st.HeaderListItem>
                <st.HeaderListItem> Películas </st.HeaderListItem>
                <Dropdown overlay={menu}>
                    <st.HeaderListItem href="#">
                        {Language} <Icon type="down" />
                    </st.HeaderListItem>
                </Dropdown>
            </st.HeaderList>
        </st.HeaderMainContainer>
    )
}