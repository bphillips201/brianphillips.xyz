import React, { FormHTMLAttributes } from "react";
import language from "../../utils/language";
import { Grid, Cell } from "styled-css-grid";
import * as styles from "./newsletterForm.module.scss";

const NewsletterForm: React.FC<FormHTMLAttributes<HTMLElement>> = () => {
    return (
        <Grid columns="repeat(auto-fit,minmax(320px,1fr))" gap={"3.2rem"} alignItems="center" className={styles.newsletterForm}>
            <Cell width={1}>
                <h3>{language.newsletter.newsletterHeader}</h3>
                <p>{language.newsletter.newsletterBlurb}</p>
            </Cell>
            <Cell middle width={1}>
                <form action="https://xyz.us15.list-manage.com/subscribe/post?u=03287c1370c469c08fd6ae8c2&amp;id=c43332b02e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                    
                    <div className="mc-field-group">
                        <label htmlFor="mce-EMAIL">Email Address</label>
                        <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
                    </div>
                    <div id="mce-responses" className="clear">
                        <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                        <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                    </div>
                    <div style={{ position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_03287c1370c469c08fd6ae8c2_c43332b02e" tabIndex={-1} value="" /></div>
                    <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                    </div>
                </form>
            </Cell>
        </Grid>
    )
}

export default NewsletterForm;