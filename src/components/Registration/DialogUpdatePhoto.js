// import React from 'react';
// import confirmAlert from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';
// import '../css/dialog_update_photo.css';
// // import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { render, unmountComponentAtNode } from 'react-dom';

// const options = {
//     title: 'Title',
//     message: 'Message',
//     buttons: [
//         {
//             label: 'Yes',
//             onClick: () => alert('Click Yes')
//         },
//         {
//             label: 'No',
//             onClick: () => alert('Click No')
//         }
//     ],
//     childrenElement: () => <div />,
//     customUI: ({ title, message, onClose }) => <div>Custom UI</div>,
//     willUnmount: () => {}
// };
//
// confirmAlert(options);
//
// // import { confirmAlert } from 'react-confirm-alert'; // Import
// // import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
//
//
//
// class DialogUpdatePhoto extends React.Component {
//
//     submit = () => {
//         confirmAlert({
//             title: 'Confirm to submit',
//             message: 'Are you sure to do this.',
//             buttons: [
//                 {
//                     label: 'Yes',
//                     onClick: () => alert('Click Yes')
//                 },
//                 {
//                     label: 'No',
//                     onClick: () => alert('Click No')
//                 }
//             ]
//         })
//     };
//
//     render() {
//         return (
//             <div className="container">
//                 <button onClick={this.submit}>Confirm dialog</button>
//             </div>
//         );
//     }
// }


// confirmAlert({
//     customUI: ({ onClose }) => {
//         return (
//             <div className='custom-ui'>
//                 <h1>Are you sure?</h1>
//                 <p>You want to delete this file?</p>
//                 <button onClick={onClose}>No</button>
//                 <button onClick={() => {
//                     this.handleClickDelete()
//                     onClose()
//                 }}>Yes, Delete it!</button>
//             </div>
//         )
//     }
// });


//nize rabota



//
// class DialogUpdatePhoto extends React.Component {
//     static propTypes = {
//         title: PropTypes.string,
//         message: PropTypes.string,
//         buttons: PropTypes.array.isRequired,
//         childrenElement: PropTypes.func,
//         customUI: PropTypes.func,
//         willUnmount: PropTypes.func
//     };
//
//     static defaultProps = {
//         buttons: [
//             {
//                 label: 'Cancel',
//                 onClick: () => null
//             },
//             {
//                 label: 'Confirm',
//                 onClick: () => null
//             }
//         ],
//         childrenElement: () => null,
//         willUnmount: () => null
//     };
//
//     handleClickButton = button => {
//         if (button.onClick) button.onClick()
//         this.close()
//     };
//
//     handleClickOverlay = (e) => {
//         if (e.target === this.overlay) this.close()
//     };
//
//     close = () => {
//         removeBodyClass();
//         removeElementReconfirm();
//         removeSVGBlurReconfirm();
//     };
//
//     keyboardClose = event => {
//         if (event.keyCode === 27) {
//             this.close()
//         }
//     };
//
//     componentDidMount = () => {
//         document.addEventListener('keydown', this.keyboardClose, false)
//     };
//
//     componentWillUnmount = () => {
//         document.removeEventListener('keydown', this.keyboardClose, false)
//         this.props.willUnmount()
//     };
//
//     renderCustomUI = () => {
//         const { title, message, customUI } = this.props;
//         const dataCustomUI = {
//             title,
//             message,
//             onClose: this.close
//         };
//
//         return customUI(dataCustomUI)
//     };
//
//     render () {
//         const { title, message, buttons, childrenElement, customUI } = this.props;
//
//         return (
//             <div
//                 className='react-confirm-alert-overlay'
//                 ref={dom => (this.overlay = dom)}
//                 onClick={this.handleClickOverlay}
//             >
//                 <div className='react-confirm-alert'>
//                     {customUI
//                         ? this.renderCustomUI()
//                         : <div className='react-confirm-alert-body'>
//                             {title && <h1>{title}</h1>}
//                             {message}
//                             {childrenElement()}
//                             <div className='react-confirm-alert-button-group'>
//                                 {buttons.map((button, i) => (
//                                     <button
//                                         key={i}
//                                         onClick={() => this.handleClickButton(button)}
//                                     >
//                                         {button.label}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>}
//                 </div>
//             </div>
//         )
//     }
// }
//
// function createSVGBlurReconfirm () {
//     // If has svg ignore to create the svg
//     const svg = document.getElementById('react-confirm-alert-firm-svg');
//     if (svg) return;
//     const svgNS = 'http://www.w3.org/2000/svg';
//     const feGaussianBlur = document.createElementNS(svgNS, 'feGaussianBlur');
//     feGaussianBlur.setAttribute('stdDeviation', '0.7');
//
//     const filter = document.createElementNS(svgNS, 'filter');
//     filter.setAttribute('id', 'gaussian-blur');
//     filter.appendChild(feGaussianBlur);
//
//     const svgElem = document.createElementNS(svgNS, 'svg');
//     svgElem.setAttribute('id', 'react-confirm-alert-firm-svg');
//     svgElem.setAttribute('class', 'react-confirm-alert-svg');
//     svgElem.appendChild(filter);
//
//     document.body.appendChild(svgElem)
// }
//
// function removeSVGBlurReconfirm () {
//     const svg = document.getElementById('react-confirm-alert-firm-svg');
//     svg.parentNode.removeChild(svg);
//     document.body.children[0].classList.remove('react-confirm-alert-blur')
// }
//
// function createElementReconfirm (properties) {
//     let divTarget = document.getElementById('react-confirm-alert');
//     if (divTarget) {
//         // Rerender - the mounted ReactConfirmAlert
//         render(<DialogUpdatePhoto {...properties} />, divTarget)
//     } else {
//         // Mount the ReactConfirmAlert component
//         document.body.children[0].classList.add('react-confirm-alert-blur');
//         divTarget = document.createElement('div');
//         divTarget.id = 'react-confirm-alert';
//         document.body.appendChild(divTarget);
//         render(<DialogUpdatePhoto {...properties} />, divTarget)
//     }
// }
//
// function removeElementReconfirm () {
//     const target = document.getElementById('react-confirm-alert');
//     unmountComponentAtNode(target);
//     target.parentNode.removeChild(target)
// }
//
// function addBodyClass () {
//     document.body.classList.add('react-confirm-alert-body-element')
// }
//
// function removeBodyClass () {
//     document.body.classList.remove('react-confirm-alert-body-element')
// }
//
// export function confirmAlert (properties) {
//     addBodyClass();
//     createSVGBlurReconfirm();
//     createElementReconfirm(properties);
// }
//  export default DialogUpdatePhoto;