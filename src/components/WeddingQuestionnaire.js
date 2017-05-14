import React from 'react'
import PropTypes from 'prop-types'
import translate from '../containers/translate'
import formToWizard from '../utils/jquery.formtowizard'
formToWizard($)
require('Styles/wQuestionnaire.less')

class WeddingQuestionnaire extends React.Component {
	componentDidMount() {
		const history = this.props.history
		$(function() {
			let $wQuestionnaire = $('#w-questionnaire')
			$wQuestionnaire.validate({
				errorElement: 'em',
				submitHandler: function() {
					let bridePhoto = document.querySelector('input[id="bridePhoto"]')
					let groomPhoto = document.querySelector('input[id="groomPhoto"]')
					let formData = new FormData(document.querySelector('#w-questionnaire'))
					if (bridePhoto.files[0]) {
						formData.append('photos[]', bridePhoto.files[0])
					}
					if (groomPhoto.files[0]) {
						formData.append('photos[]', groomPhoto.files[0])
					}
					fetch('http://localhost:3001/wdata', {
						method: 'POST',
						body: formData
					})
						.then(function(res) {
							if (res.status == 200) {
								alert('success')
								history.push('/')
							} else {
								alert('fail')
							}
						})
						.catch(function(err) {
							alert(err)
						})
				}
			})

			$wQuestionnaire.formToWizard({
				submitButton: 'submitButton',
				nextBtnClass: 'btn btn-primary next',
				prevBtnClass: 'btn btn-default prev',
				buttonTag: 'button',
				validateBeforeNext: function(form, step) {
					let stepIsValid = true
					let validator = form.validate()
					//validate files extension
					$('input[type=file]', step).each(function() {
						if (this.files[0] && !this.files[0].name.match(/\.(jpg|jpeg|png)$/i)) {
							stepIsValid = false
						}
					})
					//validate radiobuttons
					if ($('.whoAreYou', step)[0]) {
						if ($('input[type=radio]:checked', step).length != 1) {
							$('#empty-radio-err').css('visibility', 'visible')
							stepIsValid = false
						} else {
							$('#empty-radio-err').css('visibility', 'hidden')
						}
					}
					//validate required fields
					$(':input', step).each(function() {
						let valid = validator.element(this)
						stepIsValid = stepIsValid && (typeof valid == 'undefined' || valid)
					})
					if (!stepIsValid) {
						window.scrollTo(0, 0)
					}
					return stepIsValid
				},
				progress: function(i, count) {
					$('#progress-complete').width('' + i / count * 100 + '%')
				}
			})

			$('.next').html('Далее')
			$('.prev').html('Назад')
			$('#submitButton').html('Подтвердить')
		})
	}

	render() {
		let strings = this.props.strings

		return (
			<div className="row wrap">

				<div id="progress">
					<div id="progress-complete" />
				</div>

				<form id="w-questionnaire">
					<fieldset>
						<legend>{strings.infoAboutYou.title}</legend>
						<div className="form-group col-md-12">
							<div className="form-group col-md-5">
								<label htmlFor="yourself" className="control-label">
									{strings.infoAboutYou.whoAreYou[0]}
								</label>
								<div className="whoAreYou">
									<input type="radio" value={strings.infoAboutYou.whoAreYou[1]} name="you" />
									{strings.infoAboutYou.whoAreYou[1]}
									<br />
									<input type="radio" value={strings.infoAboutYou.whoAreYou[2]} name="you" />
									{strings.infoAboutYou.whoAreYou[2]}
									<br />
									<input type="radio" value={strings.infoAboutYou.whoAreYou[3]} name="you" />
									{strings.infoAboutYou.whoAreYou[3]}
									<br />
									<input type="radio" value={strings.infoAboutYou.whoAreYou[4]} name="you" />
									{strings.infoAboutYou.whoAreYou[4]}
									<br />
									<input type="radio" value={strings.infoAboutYou.whoAreYou[5]} name="you" />
									{strings.infoAboutYou.whoAreYou[5]}
									<br />
									<input type="radio" value={strings.infoAboutYou.whoAreYou[6]} name="you" />
									{strings.infoAboutYou.whoAreYou[6]}
									<br />
									<div className="error" id="empty-radio-err">you must select 1 variant</div>
								</div>
							</div>

							<div className="form-group col-md-2 hidden-sm hidden-xs">
								<div className="separate" />
							</div>

							<div className="form-group col-md-5">
								<label htmlFor="Email">{strings.infoAboutYou.email}</label>
								<input type="email" name="email" className="form-control" required />
							</div>
						</div>

					</fieldset>

					<fieldset>

						<legend>{strings.aboutNewlyweds.title}</legend>
						<div className="form-group col-md-12">
							<div className="form-group col-md-3">
								<label htmlFor="brideName">{strings.aboutNewlyweds.brideName}</label>
								<input type="text" name="brideName" className="form-control" required />

								<label htmlFor="bridePhoto">{strings.aboutNewlyweds.photo}</label>
								<input type="file" id="bridePhoto" />
							</div>

							<div className="form-group col-md-2">
								<label htmlFor="brideBirthday">{strings.aboutNewlyweds.birthday}</label>
								<input type="text" name="brideBirthday" className="form-control" required />
							</div>

							<div className="form-group col-md-2 hidden-sm hidden-xs">
								<div className="separate" />
							</div>

							<div className="form-group col-md-3">
								<label htmlFor="groomName">{strings.aboutNewlyweds.groomName}</label>
								<input type="text" name="groomName" className="form-control" required />

								<label htmlFor="groomPhoto">{strings.aboutNewlyweds.photo}</label>
								<input type="file" id="groomPhoto" />
							</div>

							<div className="form-group col-md-2">
								<label htmlFor="groomBirthday">{strings.aboutNewlyweds.birthday}</label>
								<input type="text" name="groomBirthday" className="form-control" required />
							</div>
						</div>
					</fieldset>

					<fieldset>

						<legend>{strings.aboutWedding.title}</legend>
						<div className="form-group col-md-12">
							<div className="form-group col-md-2">
								<label htmlFor="wedding-day ">{strings.aboutWedding.date}</label>
								<input
									type="text"
									name="wedding-day"
									placeholder="DD/MM/YYYY"
									className="form-control"
									required
								/>
							</div>

							<div className="about-wedding form-group col-md-8">
								<label htmlFor="info-1">{strings.aboutWedding['info-1']}</label>
								<textarea rows="7" name="info-1" className="form-control" required />
								<label htmlFor="info-2">{strings.aboutWedding['info-2']}</label>
								<textarea rows="7" name="info-2" className="form-control" required />
								<label htmlFor="info-3">{strings.aboutWedding['info-3']}</label>
								<textarea rows="7" name="info-3" className="form-control" required />
								<label htmlFor="info-4">{strings.aboutWedding['info-4']}</label>
								<textarea rows="7" name="info-4" className="form-control" required />
								<label htmlFor="info-5">{strings.aboutWedding['info-5']}</label>
								<textarea rows="7" name="info-5" className="form-control" required />
							</div>
						</div>
					</fieldset>

					<fieldset>
						<legend>{strings.details.title}</legend>
						<div className="step-form col-md-12">
							<div className="details col-md-8 col-md-offset-2">
								<label htmlFor="info-1">{strings.details['info-1']}</label>
								<textarea rows="7" name="details-1" className="form-control" required />
								<label htmlFor="info-2">{strings.details['info-2']}</label>
								<textarea rows="7" name="details-2" className="form-control" required />
								<label htmlFor="info-3">{strings.details['info-3']}</label>
								<textarea rows="7" name="details-3" className="form-control" required />
								<label htmlFor="info-4">{strings.details['info-4']}</label>
								<textarea rows="7" name="details-4" className="form-control" required />
								<label htmlFor="info-5">{strings.details['info-5']}</label>
								<textarea rows="7" name="details-5" className="form-control" required />
								<label htmlFor="info-6">{strings.details['info-6']}</label>
								<textarea rows="6" name="details-6" className="form-control" required />

								<label htmlFor="info-7">{strings.details['info-7']}</label>
								<textarea rows="7" name="details-7" className="form-control" required />

								<label htmlFor="info-8">{strings.details['info-8']}</label>
								<textarea rows="7" name="details-8" className="form-control" required />

								<label htmlFor="info-9">{strings.details['info-9']}</label>
								<textarea rows="7" name="details-9" className="form-control" required />

								<label htmlFor="info-10">{strings.details['info-10']}</label>
								<textarea rows="7" name="details-10" className="form-control" required />

								<label htmlFor="info-11">{strings.details['info-11']}</label>
								<textarea rows="7" name="details-11" className="form-control" required />

								<label htmlFor="info-12">{strings.details['info-12']}</label>
								<textarea rows="7" name="details-12" className="form-control" required />

								<label htmlFor="info-13">{strings.details['info-13']}</label>
								<textarea rows="7" name="details-13" className="form-control" required />

								<label htmlFor="info-14">{strings.details['info-14']}</label>
								<textarea rows="7" name="details-14" className="form-control" required />

								<label htmlFor="info-15">{strings.details['info-15']}</label>
								<textarea rows="7" name="details-15" className="form-control" required />

								<label htmlFor="info-16">{strings.details['info-16']}</label>
								<textarea rows="7" name="details-16" className="form-control" required />

								<label htmlFor="info-17">{strings.details['info-17']}</label>
								<textarea rows="7" name="details-17" className="form-control" required />

								<label htmlFor="info-18">{strings.details['info-18']}</label>
								<textarea rows="7" name="details-18" className="form-control" required />

								<label htmlFor="info-19">{strings.details['info-19']}</label>
								<textarea rows="7" name="details-19" className="form-control" required />

								<label htmlFor="info-20">{strings.details['info-20']}</label>
								<textarea rows="7" name="details-20" className="form-control" required />

								<label htmlFor="info-21">{strings.details['info-21']}</label>
								<textarea rows="7" name="details-21" className="form-control" required />

								<label htmlFor="info-22">{strings.details['info-22']}</label>
								<textarea rows="7" name="details-22" className="form-control" required />

								<label htmlFor="info-23">{strings.details['info-23']}</label>
								<textarea rows="7" name="details-23" className="form-control" required />

								<label htmlFor="info-24">{strings.details['info-24']}</label>
								<textarea rows="7" name="details-24" className="form-control" required />

								<label htmlFor="info-25">{strings.details['info-25']}</label>
								<textarea rows="7" name="details-25" className="form-control" required />
								<label htmlFor="info-26">{strings.details['info-26']}</label>
								<textarea rows="7" name="details-26" className="form-control" required />

								<label htmlFor="info-27">{strings.details['info-27']}</label>
								<textarea rows="7" name="details-27" className="form-control" required />

								<label htmlFor="info-28">{strings.details['info-28']}</label>
								<textarea rows="7" name="details-28" className="form-control" required />

								<label htmlFor="info-29">{strings.details['info-29']}</label>
								<textarea rows="7" name="details-29" className="form-control" required />

							</div>
						</div>
					</fieldset>

					<button id="submitButton" className="btn btn-primary submit">Submit form</button>

				</form>
			</div>
		)
	}
}

WeddingQuestionnaire.propTypes = {
	strings: PropTypes.object
}

export default translate('WeddingQuestionnaire')(WeddingQuestionnaire)
