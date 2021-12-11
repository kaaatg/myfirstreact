const NavBar = () => {
    return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">BLΛƆKPIИK</a>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link   " href="/">Home</a>
                                <a class="nav-link" href="/employees">Employees</a>
                                <a class="nav-link" href="/add">Add Employee</a>
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
    );
}

export default NavBar