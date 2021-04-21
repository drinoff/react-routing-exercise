import styled from 'styled-components'

const StyledFooter = styled.footer`
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #333333;
    color: white;
    text-align: center;
}
`;

const Footer = ()=>{
    return (
        <StyledFooter>
        <footer class="footer">
            <p>Created for Testing Purposes from Drinoff</p>
        </footer>
        </StyledFooter>
    );
}
export default Footer;