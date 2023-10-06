
import styled from 'styled-components'
import myImage from './img/sunflower.jpg'
import React from 'react'

type Props = {}

const Index = (props: Props) => {
    const Container = styled.div`
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        column-gap: 30px;
    `
    const Header = styled.div`
        grid-column: span 3;
        text-align: center;
        border-bottom: 1px solid #ddd;    
    `
    const Nav = styled.div`
        padding: 30px;
        border-right: 1px solid #ddd;
    `
    const Li = styled.div`
        text-decoration: underline;
    `
    const Article = styled.div`
        padding: 30px;
    `
    const ArticleH2 = styled.div`
        font-size: 3.5em;
        max-width: 800px;
    `
    const ArticleImg = styled.div`
        background-image: url(${myImage});
        width: 100%;
    `
    const ArticleP = styled.div`
        margin-top: 30px;
        line-height: 2em;
        color: #777;
    `
    const Aside = styled.div`
        padding: 30px;
        border-left: 1px solid #ddd;
    `
    const Ul = styled.div`
        padding: 0;
        list-style-type: none;
    `
    const Footer = styled.div`
        grid-column: span 3;
        text-align: center;
        border-top: 1px solid #ddd;
        padding: 30px;
    `
  return (
    <>
        <Container>
            <Header>
                <h1>The Fog Wall</h1>
            </Header>
            <Nav>
                <p>Categories</p>
                <Li>Film & Cinema</Li>
                <Li>Books & Reading</Li>
                <Li>Games & Consoles</Li>
                <Li>Food & Drink</Li>
                <Li>World News</Li>
                <Li>Outdoor Living</Li>
            </Nav>
            <Article>
                <ArticleH2>The Best 5 Open World Adventure Games</ArticleH2>
                <ArticleImg/>
                <ArticleP>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nesciunt voluptas dolorem ad blanditiis! Odio nostrum qui unde, reiciendis quod temporibus iste magni consectetur repellat eius odit quisquam porro nihil, deserunt voluptas non quam totam magnam voluptatibus enim doloremque. Iure exercitationem illo possimus dicta blanditiis ipsa ad nihil mollitia alias.</ArticleP>
                <ArticleP>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nesciunt voluptas dolorem ad blanditiis! Odio nostrum qui unde, reiciendis quod temporibus iste magni consectetur repellat eius odit quisquam porro nihil, deserunt voluptas non quam totam magnam voluptatibus enim doloremque. Iure exercitationem illo possimus dicta blanditiis ipsa ad nihil mollitia alias.</ArticleP>
            </Article>
            <Aside>
                <Ul>
                    <Li>
                        <p><strong>Published on:</strong></p>
                        <p>May 6th 2023</p>
                    </Li>
                    <Li>
                        <p><strong>In the category:</strong></p>
                        <p>Game & Console</p>
                    </Li>
                    <Li>
                        <p><strong>Written y:</strong></p>
                        <p>Mario</p>
                    </Li>
                </Ul>
            </Aside>
            <Footer>
                <p>Copyright 2023 The Fog Wall</p>
            </Footer>
        </Container>
    </>
  )
}

export default Index;