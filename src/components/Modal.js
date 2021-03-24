import React from "react"
import styled from "styled-components";
import HamburgerMenu from "react-hamburger-menu"
import gsap from "gsap"

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showArrow: false }
  }

  openModal() {
    document.body.style.height = "100vh"
    document.body.style.overflow = "hidden"
    var tl = gsap.timeline()
    tl.to(`#${this.props.id}_modal`, {duration: 0.15, autoAlpha: 1})
    tl.to(`#${this.props.id}_modalContentWrapper`, {duration: 0.25, opacity: 1, scale: 1, ease: "back"})
  } 

  closeModal() {
    var tl = gsap.timeline()
    tl.to(`#${this.props.id}_modalContentWrapper`, {duration: 0.25, opacity: 0, scale: 0, ease: "power2"})
    tl.to(`#${this.props.id}_modal`, {duration: 0.15, autoAlpha: 0})
    document.body.style.height = null
    document.body.style.overflow = null
  }

  determineShowArrow() {
    const modalContent = document.getElementById(`${this.props.id}_modalContent`)
    if (!modalContent) { return }
    
    if (modalContent.scrollHeight > modalContent.clientHeight) {
      this.setState({ showArrow: true })
    } else if (modalContent.scrollHeight <= modalContent.clientHeight) {
      this.setState({ showArrow: false })
    }
  }

  componentDidMount() {
    this.determineShowArrow()

    var resizeId
    window.addEventListener("resize", () => {
      clearTimeout(resizeId);
      resizeId = setTimeout(this.determineShowArrow.bind(this), 500);
    })
  }

  render() {
    return (
      <ModalWrapper id={`${this.props.id}_modal`}>
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>
        <ModalContentWrapper id={`${this.props.id}_modalContentWrapper`}>
          <HamburgerMenuContainer>
            <HamburgerMenu
              isOpen={true}
              menuClicked={this.closeModal.bind(this)}
              width={20}
              height={20}
              strokeWidth={3}
              color="black"
            />
          </HamburgerMenuContainer>
          { this.state.showArrow &&
            <Arrow>
              <i 
                id={`${this.props.id}_modalArrow`} 
                class='bx bx-down-arrow-circle bx-md' 
              />
            </Arrow>
          }
          <ModalTitleWrapper>
            <ModalTitle>{this.props.name}</ModalTitle>
          </ModalTitleWrapper>
          <ModalContent id={`${this.props.id}_modalContent`}>
            {this.props.children}
          </ModalContent>
        </ModalContentWrapper>
      </ModalWrapper>
    )
  }
}

export default Modal

const HamburgerMenuContainer = styled.div`
  position: absolute;
  display: inline;
  padding-top: 40px;
  padding-right: 40px;
  top: 0;
  right: 0;
  z-index: 99;
  cursor: pointer;
`;

const ModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 101vh;
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0,0,0,0.65);
  visibility: hidden;
  overflow: scroll;
  z-index: 99;
  cursor: auto;
`;

const ModalContentWrapper = styled.div`
  height: 50vh;
  min-height: 500px;
  width: 75vw;
  margin: auto;
  background-color: white;
  border-radius: 8px;
  padding: 40px;
  position: relative;
  opacity: 0;
  transform: scale(0, 0);
  max-width: 1000px;
  border: 4px solid #C85151;
`;

const ModalTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 26px;
  color: #333333;
  display: inline-block;
`;

const ModalTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ModalContent = styled.div`
  font-size: larger;
`;

const Arrow = styled.div`
  position: absolute;
  display: inline;
  padding-bottom: 36px;
  padding-right: 33px;
  bottom: 0;
  right: 0;
  z-index: 99;
  font-size: large;
  color: #C54E9E;
`;