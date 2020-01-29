import React, { useState } from 'react'
import { Header } from '../../Components/Header/Header'
import { Menu, Dropdown, Icon } from 'antd';
import { Link } from '@reach/router'

import * as st from './Home.styles'

export const Home = () =>

    <st.HomeMainContainer>
        <st.LogoContainer src={require('../../Assets/GraphWars.svg')} />

        <Link to='directory'>
            <st.StartContainer>
                <st.StartButton> Explore </st.StartButton>
            </st.StartContainer>
        </Link>
    </st.HomeMainContainer>