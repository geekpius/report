
export default function Footer() {
    let date = new Date();
    return (
        <footer className="sticky-footer bg-white">
            <div className="container my-auto">
                <div className="copyright text-center my-auto">
                    <span>Copyright &copy; Report {date.getFullYear()}</span>
                </div>
            </div>
        </footer>
    );
}
