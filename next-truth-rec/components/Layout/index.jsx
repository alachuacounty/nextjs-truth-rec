import Navigation from '../Navigation'
import Modal from '../Modal'
import Footer from '../Footer'
import layoutStyles from './layout-styles'
import Head from "next/head"

class Layout extends React.Component {

    render(){
        return (
            <div className="grid-container">
                <Head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css"></link>
                </Head>
            <Navigation/>
            <Modal/>
            {this.props.children}
            <Footer/>
            <style jsx global>
                {layoutStyles}
            </style>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
            <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>

            </div>

        );
    }
} 

export default Layout;