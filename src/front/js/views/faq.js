import React, { useEffect } from "react";

import "../../styles/faq.css";

export const Faq = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="pricing-title">
        <h1>FAQ</h1>
      </div>
      <div className="faq-container">
        <div className="faq-accordion">
          <div className="top-space">
            <input type="radio" name="example_accordion" id="section1" className="accordion__input" />
            <label htmlFor="section1" className="accordion__label">Are Tattoos Safe?</label>
            <div className="accordion__content">
              <p>
                As long as you go to a reputable artist that is following all recommended safety precautions,
                getting a tattoo is perfectly safe. Make sure you're fully honest about any medical conditions.
              </p>
            </div>
          </div>
          <hr className="faq-hr" />
          <div>
            <input type="radio" name="example_accordion" id="section2" className="accordion__input" />
            <label htmlFor="section2" className="accordion__label">Does It Hurt?</label>
            <div className="accordion__content">
              <p>
                Pain is really relative. Everyone has a different tolerance for pain. We're not going to kid you,
                though — it does hurt. Just not that much. People would not be returning again and again for tattoo
                after tattoo if it hurt that bad. Most people are not into pain, but the beauty of the tattoo and the
                pride associated with wearing it far outweighs a little pin-stick here and there.
              </p>
            </div>
          </div>
          <hr className="faq-hr" />
          <div>
            <input type="radio" name="example_accordion" id="section3" className="accordion__input" />
            <label htmlFor="section3" className="accordion__label">How Much Is It Going to Cost?</label>
            <div className="accordion__content">
              <p>
                When it comes to tattoos, you get what you pay for. Yes, there are plenty of people tattooing out there
                that will charge very little. But, look for quality, and be willing to pay for it. Never haggle over the
                price of a tattoo. It is disrespectful to the artist. Think of it this way: This is a piece of art you'll
                wear for life.

                For more information, check our pricing section in the menu.
              </p>
            </div>
          </div>
          <hr className="faq-hr" />
          <div>
            <input type="radio" name="example_accordion" id="section4" className="accordion__input" />
            <label htmlFor="section4" className="accordion__label">What Is the Best Time of Year to Get a Tattoo?</label>
            <div className="accordion__content">
              <p>
                Although you can get a tattoo any time of the year, your skin gets a lot more abuse during the summer with
                swimming, tanning, and just being exposed to the elements more. Winter time is really the best season to get
                a tattoo.
              </p>
            </div>
          </div>
          <hr className="faq-hr" />
          <div>
            <input type="radio" name="example_accordion" id="section5" className="accordion__input" />
            <label htmlFor="section5" className="accordion__label">I Just Got a New Tattoo on My Leg - Can I Shave?</label>
            <div className="accordion__content">
              <p>
                It will take some time for your skin to heal enough for you to shave again and it can vary from person to person.
              </p>
            </div>
          </div>
          <hr className="faq-hr" />
          <div className="bottom-space">
            <input type="radio" name="example_accordion" id="section6" className="accordion__input" />
            <label htmlFor="section6" className="accordion__label">Is Tanning OK When You Have Tattoos?</label>
            <div className="accordion__content">
              <p>
                It might be really tempting to get some rays during the summer months or hit up the tanning salon, but before you
                ruin your tattoo, please read about tattoos and tanning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
