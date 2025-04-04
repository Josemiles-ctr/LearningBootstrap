import '../index.module.css'
const Home =()=>{

    return (
    <>
       <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
        <div className="container">
            <a href="" className="navbar-brand">
                Learn Bootstrap
            </a>
            <button className="navbar-toggler ms-auto"
                    type='button' data-bs-toggle="collapse"
                    data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse"id='navmenu'>
                <ul className="navbar-nav ms-auto" >
                    <l1 className="nav-item">
                        <a href="#" className="nav-link">Home</a>
                    </l1>
                    <l1 className="nav-item">
                        <a href="/about" className="nav-link">About</a>
                    </l1>
                    <l1 className="nav-item">
                        <a href="/contact" className="nav-link">Contact</a>
                    </l1>
                    <l1 className="nav-item">
                        <a href="/products" className="nav-link">Products</a>
                    </l1>
                </ul>
            </div>
        </div>
       </nav>
       <section className="bg-dark text-light p-5 text-center">

     <div className="container">
        <div className='d-sm-flex justify-items-between'>
            <div>
                <h1>Become a <span className="text-warning">
                Web Developer</span></h1>
                <p className='lead'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur rerum delectus omnis maxime minima numquam adipisci molestiae modi distinctio, asperiores similique. Quibusdam aliquam ut commodi molestias assumenda magni dicta?
                </p>
                <button className="btn btn-primary">
                    Start The Enrollmentcd
                </button>
            </div>
            <div>
            <img className='img-fluid' src="download3.jpeg" alt="" />
            </div>
        </div>
        
       </div>
       </section>
       <div className="container border my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste alias architecto. Ea accusamus eum qui aspernatur quasi ab inventore cumque excepturi nihil magni non, asperiores, explicabo necessitatibus consectetur vero, voluptates itaque. Iusto quae aperiam cum nihil qui voluptatem obcaecati dolor pariatur cumque recusandae, quasi sit reiciendis blanditiis assumenda quam!
       </div>
    </>
    )

}

export default Home;