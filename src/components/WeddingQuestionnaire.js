// import React from 'react'
// import PropTypes from 'prop-types'
// import translate from '../containers/translate'
// const $ = require('jquery');
// import formToWizard from '../utils/jquery.formtowizard';
// formToWizard($);
// require('Styles/wQuestionnaire.less');
//
// 
// class WeddingQuestionnaire extends React.Component {
//
//
//     componentDidMount() {
//         $(function () {
//             let $wQuestionnaire = $('#w-questionnaire');
//
//                   $signupForm.validate({errorElement: 'em'});
//
//             $wQuestionnaire.formToWizard({
//                 submitButton: 'SaveAccount',
//                 nextBtnClass: 'btn btn-primary next',
//                 prevBtnClass: 'btn btn-default prev',
//                 buttonTag: 'button',
//                 validateBeforeNext: function (form, step) {
//                     var stepIsValid = true;
//                     var validator = form.validate();
//                       $(':input', step).each( function(index) {
//                      var xy = validator.element(this);
//                      stepIsValid = stepIsValid && (typeof xy == 'undefined' || xy);
//                      });
//                     return stepIsValid;
//                 },
//                 progress: function (i, count) {
//                     $('#progress-complete').width('' + (i / count * 100) + '%');
//                 }
//             });
//         });
//     }
//
//
//     render() {
//
//         let strings = this.props.strings;
//
//         return (
//              <div className="container w-questionnaire">
//
//              <div id='progress'>
//              <div id='progress-complete'></div>
//              </div>
//              <form id="w-form">
//              <filedset>
//
//
//              <legend>{strings.infoAboutYou.title}</legend>
//
//
//              <div className="form-group col-lg-5">
//              <label for="yourself" className="control-label"> {strings.infoAboutYou.whoAreYou[0]}</label>
//              <div>
//              <input type="radio"
//              value={strings.infoAboutYou.whoAreYou[1]}
//              name="you"> {strings.infoAboutYou.whoAreYou[1]}</input>
//              </div>
//              <div>
//              <input name="you" type="radio"
//              value={strings.infoAboutYou.whoAreYou[2]}> {strings.infoAboutYou.whoAreYou[2]}</input>
//              </div>
//              <div>
//              <input name="you" type="radio"
//              value={strings.infoAboutYou.whoAreYou[3]}> {strings.infoAboutYou.whoAreYou[3]}</input>
//              </div>
//              <div>
//              <input name="you" type="radio"
//              value={strings.infoAboutYou.whoAreYou[4]}> {strings.infoAboutYou.whoAreYou[4]}</input>
//              </div>
//              <div>
//              <input name="you" type="radio"
//              value={strings.infoAboutYou.whoAreYou[5]}> {strings.infoAboutYou.whoAreYou[5]}</input>
//              </div>
//              <div>
//              <input name="you" type="radio"
//              value={strings.infoAboutYou.whoAreYou[6]}> {strings.infoAboutYou.whoAreYou[6]}</input>
//              </div>
//              </div>
//
//
//              <div className="form-group col-lg-2">
//              <div className="separate"></div>
//              </div>
//
//              <div className="form-group col-lg-4">
//              <label for="Email">{strings.infoAboutYou.email}</label>
//              <input id="Email" type="email" className="form-control" required/>
//
//
//              </div>
//
//              </filedset>
//
//
//
//
//
//
//
//
//
//              </form>
//              </div>
//             <div className="row wrap">
//                 <div className="col-lg-12">
//
//                     <div id='progress'>
//                         <div id='progress-complete'></div>
//                     </div>
//
//                     <form id="w-questionnaire" action="">
//
//
//                         <fieldset>
//
//
//                             <legend>{strings.infoAboutYou.title}</legend>
//
//                             <div className="form-group step-form">
//                                 <div className="form-group col-lg-5">
//                                     <label for="yourself"
//                                            className="control-label"> {strings.infoAboutYou.whoAreYou[0]}</label>
//                                     <div>
//                                         <input type="radio"
//                                                value={strings.infoAboutYou.whoAreYou[1]}
//                                                name="you"> {strings.infoAboutYou.whoAreYou[1]}</input>
//                                     </div>
//                                     <div>
//                                         <input name="you" type="radio"
//                                                value={strings.infoAboutYou.whoAreYou[2]}> {strings.infoAboutYou.whoAreYou[2]}</input>
//                                     </div>
//                                     <div>
//                                         <input name="you" type="radio"
//                                                value={strings.infoAboutYou.whoAreYou[3]}> {strings.infoAboutYou.whoAreYou[3]}</input>
//                                     </div>
//                                     <div>
//                                         <input name="you" type="radio"
//                                                value={strings.infoAboutYou.whoAreYou[4]}> {strings.infoAboutYou.whoAreYou[4]}</input>
//                                     </div>
//                                     <div>
//                                         <input name="you" type="radio"
//                                                value={strings.infoAboutYou.whoAreYou[5]}> {strings.infoAboutYou.whoAreYou[5]}</input>
//                                     </div>
//                                     <div>
//                                         <input name="you" type="radio"
//                                                value={strings.infoAboutYou.whoAreYou[6]}> {strings.infoAboutYou.whoAreYou[6]}</input>
//                                     </div>
//                                 </div>
//
//
//                                 <div className="form-group col-lg-2">
//                                     <div className="separate"></div>
//                                 </div>
//
//                                 <div className="form-group col-lg-4">
//                                     <label for="Email">{strings.infoAboutYou.email}</label>
//                                     <input id="Email" type="email" className="form-control" required/>
//                                 </div>
//                             </div>
//
//                         </fieldset>
//
//                         <fieldset>
//
//                             <legend>{strings.aboutNewlyweds.title}</legend>
//                             <div className="form-group step-form">
//                                 <div className="bride-form form-group col-lg-3">
//                                     <label for="brideName">{strings.aboutNewlyweds.brideName}</label>
//                                     <input type="text" id="brideName" className="form-control" required/>
//
//
//                                     <label for="bridePhoto">{strings.aboutNewlyweds.photo}</label>
//                                     <input type="file" id="bridePhoto" required/>
//                                 </div>
//
//
//                                 <div className="form-birthday form-group col-lg-2">
//                                     <label for="brideBirthday">{strings.aboutNewlyweds.birthday}</label>
//                                     <input type="text" id="brideBirthday" className="form-control" required/>
//                                 </div>
//
//                                 <div className="form-group col-lg-2">
//                                     <div className="separate"></div>
//                                 </div>
//
//                                 <div className="groom-form form-group col-lg-3">
//                                     <label for="groomName">{strings.aboutNewlyweds.groomName}</label>
//                                     <input type="text" id="groomName" className="form-control" required/>
//
//
//                                     <label for="groomPhoto">{strings.aboutNewlyweds.photo}</label>
//                                     <input type="file" id="groomPhoto" required/>
//
//                                 </div>
//
//                                 <div className="groom-birthday form-group col-lg-2">
//                                     <label for="groomBirthday">{strings.aboutNewlyweds.birthday}</label>
//                                     <input type="text" id="groomBirthday" className="form-control" required/>
//                                 </div>
//                             </div>
//                         </fieldset>
//
//                         <fieldset>
//
//                             <legend>{strings.aboutWedding.title}</legend>
//                             <div className="form-group step-form-aboutWedding">
//                                 <div>
//                                     <div className="wedding-day form-group col-lg-2">
//                                         <label for="wedding-day ">{strings.aboutWedding.date}</label>
//                                         <input type="text" id="wedding-day " className="form-control" required/>
//                                     </div>
//                                 </div>
//
//                                 <div style={{overflow: "hidden"}}>
//                                     <div className="form-group">
//                                         <div className="row">
//                                             <div className="col-md-8">
//                                                 <div id="datetimepicker12"></div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//
//                                 <div>
//                                     <div className="form-group col-lg-8">
//
//                                         <label for="info-1">{strings.aboutWedding["info-1"]}</label>
//                                         <textarea rows="7" id="info-1" className="form-control" required/>
//                                         <label for="info-2">{strings.aboutWedding["info-2"]}</label>
//                                         <textarea rows="7" id="info-2" className="form-control" required/>
//                                         <label for="info-3">{strings.aboutWedding["info-3"]}</label>
//                                         <textarea rows="7" id="info-3" className="form-control" required/>
//                                         <label for="info-4">{strings.aboutWedding["info-4"]}</label>
//                                         <textarea rows="7" id="info-4" className="form-control" required/>
//                                         <label for="info-5">{strings.aboutWedding["info-5"]}</label>
//                                         <textarea rows="7" id="info-5" className="form-control" required/>
//
//                                     </div>
//                                 </div>
//                             </div>
//                         </fieldset>
//
//                         <fieldset>
//                             <legend>{strings.details.title}</legend>
//                             <div className="step-form">
//                                     <div style={{float:"none"}} className="col-lg-8 col-lg-offset-2">
//                                         <label for="info-1">{strings.details["info-1"]}</label>
//                                         <textarea rows="7" id="info-1" className="form-control" required/>
//                                         <label for="info-2">{strings.details["info-2"]}</label>
//                                         <textarea rows="7" id="info-2" className="form-control" required/>
//                                         <label for="info-3">{strings.details["info-3"]}</label>
//                                         <textarea rows="7" id="info-3" className="form-control" required/>
//                                         <label for="info-4">{strings.details["info-4"]}</label>
//                                         <textarea rows="7" id="info-4" className="form-control" required/>
//                                         <label for="info-5">{strings.details["info-5"]}</label>
//                                         <textarea rows="7" id="info-5" className="form-control" required/>
//                                         <label for="info-6">{strings.details["info-6"]}</label>
//                                         <textarea rows="6" id="info-6" className="form-control" required/>
//
//                                         <label for="info-7">{strings.details["info-7"]}</label>
//                                         <textarea rows="7" id="info-7" className="form-control" required/>
//
//                                         <label for="info-8">{strings.details["info-8"]}</label>
//                                         <textarea rows="7" id="info-8" className="form-control" required/>
//
//                                         <label for="info-9">{strings.details["info-9"]}</label>
//                                         <textarea rows="7" id="info-9" className="form-control" required/>
//
//                                         <label for="info-10">{strings.details["info-10"]}</label>
//                                         <textarea rows="7" id="info-10" className="form-control" required/>
//
//                                         <label for="info-11">{strings.details["info-11"]}</label>
//                                         <textarea rows="7" id="info-11" className="form-control" required/>
//
//                                         <label for="info-12">{strings.details["info-12"]}</label>
//                                         <textarea rows="7" id="info-12" className="form-control" required/>
//
//                                         <label for="info-13">{strings.details["info-13"]}</label>
//                                         <textarea rows="7" id="info-13" className="form-control" required/>
//
//                                         <label for="info-14">{strings.details["info-14"]}</label>
//                                         <textarea rows="7" id="info-14" className="form-control" required/>
//
//                                         <label for="info-15">{strings.details["info-15"]}</label>
//                                         <textarea rows="7" id="info-15" className="form-control" required/>
//
//                                         <label for="info-16">{strings.details["info-16"]}</label>
//                                         <textarea rows="7" id="info-16" className="form-control" required/>
//
//                                         <label for="info-17">{strings.details["info-17"]}</label>
//                                         <textarea rows="7" id="info-17" className="form-control" required/>
//
//                                         <label for="info-18">{strings.details["info-18"]}</label>
//                                         <textarea rows="7" id="info-18" className="form-control" required/>
//
//                                         <label for="info-19">{strings.details["info-19"]}</label>
//                                         <textarea rows="7" id="info-19" className="form-control" required/>
//
//                                         <label for="info-20">{strings.details["info-20"]}</label>
//                                         <textarea rows="7" id="info-20" className="form-control" required/>
//
//                                         <label for="info-21">{strings.details["info-21"]}</label>
//                                         <textarea rows="7" id="info-21" className="form-control" required/>
//
//                                         <label for="info-22">{strings.details["info-22"]}</label>
//                                         <textarea rows="7" id="info-22" className="form-control" required/>
//
//                                         <label for="info-23">{strings.details["info-23"]}</label>
//                                         <textarea rows="7" id="info-23" className="form-control" required/>
//
//                                         <label for="info-24">{strings.details["info-24"]}</label>
//                                         <textarea rows="7" id="info-24" className="form-control" required/>
//
//                                         <label for="info-25">{strings.details["info-25"]}</label>
//                                         <textarea rows="7" id="info-25" className="form-control" required/>
//                                         <label for="info-26">{strings.details["info-26"]}</label>
//                                         <textarea rows="7" id="info-26" className="form-control" required/>
//
//                                         <label for="info-27">{strings.details["info-27"]}</label>
//                                         <textarea rows="7" id="info-27" className="form-control" required/>
//
//                                         <label for="info-28">{strings.details["info-28"]}</label>
//                                         <textarea rows="7" id="info-28" className="form-control" required/>
//
//                                         <label for="info-29">{strings.details["info-29"]}</label>
//                                         <textarea rows="7" id="info-29" className="form-control" required/>
//
//                                 </div>
//                             </div>
//
//                         </fieldset>
//
//                         <p>
//                             <button id="SaveAccount" className="btn btn-primary submit">Submit form</button>
//                         </p>
//                     </form>
//
//                 </div>
//
//             </div>
//         )
//     }
// }
//
//
// WeddingQuestionnaire.propTypes = {
//     strings: PropTypes.object
// }
//
// export default translate('WeddingQuestionnaire')(WeddingQuestionnaire)
