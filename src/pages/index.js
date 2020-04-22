import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "../sass/modules/index.module.sass"
import { RichText, Date } from "prismic-reactjs"
import Img from "gatsby-image"
import React, { Component } from "react"
import Slider from "react-slick"
import SplashScreen from "../components/splash-screen"

export default ({ data }) => {
  const archives = data.prismic.allArchives.edges
  const FeaturedArchive = ( { archives } ) => {
    if (!archives) return null
    return (
      <>
        {archives.map(archive => {
          return (
            <Link to={'/work/' + archive.node._meta.uid} key={archive.node._meta.id} aria-label={archive.node.title} className={style.featuredArchive}>
              <Img className={style.imageMobile} fluid={archive.node.hero_imageSharp.childImageSharp.fluid} alt={archive.node.hero_image.alt}/>
            </Link>
          )
        })}
      </>
    )
  }
  class SimpleSlider extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }
    render() {
      const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        easing: `linear`,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        touchMove: true,
        touchThreshold: 5,
        verticle: false,
        rows: 1,
      };
      return (
        <Slider ref={c => (this.slider = c)} {...settings} className={style.slider}>
          {archives.slice(0, 5).map(archive => {
            return (
              <div to={'/work/' + archive.node._meta.uid} key={archive.node._meta.id} className={style.featuredArchive}>
                <div className={style.sliderControls}>
                  <button className={style.buttonPrevious} onClick={this.previous}>
                    Previous
                  </button>
                  <button className={style.buttonNext} onClick={this.next}>
                    Next
                  </button>
                  <Link aria-label={"View " + RichText.asText(archive.node.title)} to={'/work/' + archive.node._meta.uid} key={archive.node._meta.id} className={style.goToWork}></Link>
                </div>
                <Img className={style.image} fluid={archive.node.hero_imageSharp.childImageSharp.fluid} alt={archive.node.hero_image.alt}/>
                <Link to={'/work/' + archive.node._meta.uid} key={archive.node._meta.id} className={style.featuredArchive}>
                  <div className={style.text}>
                    <h2>{RichText.asText(archive.node.title)}</h2>
                    <p>{Date(archive.node.year).getFullYear()}</p>
                  </div>
                </Link>
              </div>
            )
          })}
        </Slider>
      );
    }
  }
  // Window Resize Animation Stopper
  if (typeof document !== 'undefined') {
    // device detection
    // if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { 
      return(
        <Layout>
          <SEO title="Home" />
          <SplashScreen />
          <FeaturedArchive archives={archives} /> 
        </Layout>
      )
    } else {
      return (
        <Layout>
          <SEO title="Home" />
          <SplashScreen />
          <SimpleSlider/>
        </Layout>
      )
    }
  } else {
    return null
  };
 
}

export const pageQuery = graphql`
  query SliderData {
    prismic {
      allArchives(sortBy: year_DESC) {
        edges {
          node {
            title
            location
            year
            archive_number
            services
            hero_image
            hero_imageSharp {
              id
              uid
              childImageSharp {
                id
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            _meta {
              id
              uid
            }
          }
        }
      }
    }
  }
`
