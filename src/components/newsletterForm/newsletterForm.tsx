import React, { FormHTMLAttributes } from 'react'
import language from '../../utils/language'
import { Grid, Cell } from 'styled-css-grid'
import classnames from 'classnames'
import * as styles from './newsletterForm.module.scss'

const NewsletterForm: React.FC<FormHTMLAttributes<HTMLElement>> = props => {
  const { className = '', ...rest } = props

  const newsletterClasses = classnames({
    [styles.newsletterForm]: true,
    [className]: className,
  })

  return (
    <Grid
      columns="repeat(auto-fit,minmax(297px,1fr))"
      gap={'2.4rem'}
      alignItems="center"
      className={newsletterClasses}
      {...rest}
    >
      <Cell width={1}>
        <h4>{language.newsletter.newsletterHeader}</h4>
        <p>{language.newsletter.newsletterBlurb}</p>
      </Cell>
      <Cell middle width={1}>
        <form
          action="https://xyz.us15.list-manage.com/subscribe/post?u=03287c1370c469c08fd6ae8c2&amp;id=c43332b02e"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <input
                type="email"
                defaultValue=""
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                placeholder=" "
                required
              />
              <label htmlFor="mce-EMAIL">{language.newsletter.labelText}</label>
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              ></div>
            </div>
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_03287c1370c469c08fd6ae8c2_c43332b02e"
                tabIndex={-1}
                defaultValue=""
              />
            </div>
            <div className="clear">
              <button type="submit" name="subscribe" id="mc-embedded-subscribe">
                {language.newsletter.submitButton}
              </button>
            </div>
          </div>
        </form>
      </Cell>
    </Grid>
  )
}

export default NewsletterForm
