function Footer() {
    const getYear = () => {
        const d = new Date();
        return d.getFullYear();
    }

    return(
        <footer className="footer">
            <p>Copyright &copy; {getYear()} James Choi. All Rights Reserved.</p>
        </footer>
    );
}   

export default Footer;