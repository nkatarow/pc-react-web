import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Utilities
import getComponentImages from '../../_utility/getComponentImages';

// Atoms
import Title from '../../components/atoms/title/';
import Button from '../../components/atoms/button/';

// Molecules
import Hero from '../../components/molecules/Hero';
import { Input, Textarea, Select } from '../../components/atoms/forms/';

import './style.css';

class ContactUs extends Component {
  constructor() {
    super();

    const queryString = new URLSearchParams(window.location.search);
    const referrer = queryString.get('referrer');
    let referralId = null;
    let success = false;

    switch (referrer) {
      case 'success':
        success = true;
        break;
      case 'code-stat':
        referralId = '701j0000001S9TD';
        break;
      case 'healthems':
        referralId = '701j00000005hYx';
        break;
      case 'homesolutions':
        referralId = '701f1000001o8eZ';
        break;
      case 'lifenet-system':
        referralId = '701j0000001S9TI';
        break;
      case 'professional-services':
        referralId = '701f1000001o8ee';
        break;
      default:
        referralId = '701f1000001o8ej';
    }

    this.state = {
      campaign: referralId,
      success,
    };
  }

  componentDidMount() {
    document.title = 'Contact Us | Physio-Control';
    window.scrollTo(0, 0);
  }

  render() {
    const images = getComponentImages(require.context('./_img', false, /\.(png|jpe?g|svg)$/));

    return (
      <section className="contact-form">
        <Hero
          isMobile={this.props.isMobile}
          headlineColor="white"
          mobileHero={images['bg-hero-mobile.jpg']}
          desktopHero={images['bg-hero-desktop.jpg']}
          headline="Ready to learn more? Let's schedule a demo."
        />

        {this.state.success &&
          <div className="success">
            <h2 className="h2 subhead black">Your message has been submitteed!</h2>
          </div>
        }

        <div className="contain">
          <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
            <Title tag="h2" theme="headline">Please tell us a little about yourself</Title>

            <input type="hidden" name="oid" value="00Dj0000000Hq9N" />
            <input type="hidden" name="retURL" value="http://www.betterdatabettercare.com/contact-us?referrer=success" />

            <div className="offscreen">
              {/*
                NOTE: These fields are hidden and
                pre-populated for use in salesforce
              */}

              <Select
                fieldName="lead_source"
                id="lead_source"
                label="Lead Source"
                defaultValue="Website (Data-Solutions)"
              >
                <option value="Website (Data-Solutions)">Website (Data-Solutions)</option>
              </Select>

              <Input
                id="00Nj0000003VGZW"
                fieldName="00Nj0000003VGZW"
                defaultValue="Customer Has Requested Information"
                maxLength={50}
                type="text"
                label="Lead Source Description"
                required
              />

              <Select
                fieldName="00Nj000000A0B9H"
                id="00Nj000000A0B9H"
                name="00Nj000000A0B9H"
                label="Primary Physio Product"
                defaultValue="Data Solutions Only"
              >
                <option value="Data Solutions Only">Data Solutions Only</option>
              </Select>

              <Select
                fieldName="Campaign_ID"
                id="Campaign_ID"
                label="Campaign"
                defaultValue={this.state.campaign}
              >
                <option value="701j0000001S9TD">PLMF | CODE-STAT</option>
                <option value="701f1000001o8ej">PLMF | Contact Us</option>
                <option value="701j00000005hYx">PLMF | HealthEMS</option>
                <option value="701f1000001o8eZ">PLMF | HomeSolutions.net</option>
                <option value="701j0000001S9TI">PLMF | LIFENET</option>
                <option value="701f1000001o8ee">PLMF | Professional Services</option>
              </Select>
            </div>

            {/*
            NOTE: These fields are optional debugging elements. Please uncomment
            these lines if you wish to test in debug mode.
            <input type="hidden" name="debug" value="1" />
            <input type="hidden" name="debugEmail" value="nick@turnstyle.studio" />
            */}

            <Input
              fieldName="first_name"
              type="text"
              label="First name"
              required
            />

            <Input
              fieldName="last_name"
              maxLength={80}
              type="text"
              label="Last name"
              required
            />

            <Input
              fieldName="company"
              maxLength={40}
              type="text"
              label="Company"
              required
            />

            <Input
              fieldName="zip"
              type="text"
              label="Zip Code"
              required
            />

            <Input
              fieldName="phone"
              maxLength={40}
              type="text"
              label="Phone"
              required
            />

            <Select fieldName="country_code" label="Country">
              <option value="AF">Afghanistan</option>
              <option value="AX">Aland Islands</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia, Plurinational State of</option>
              <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BV">Bouvet Island</option>
              <option value="BR">Brazil</option>
              <option value="IO">British Indian Ocean Territory</option>
              <option value="BN">Brunei Darussalam</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CA">Canada</option>
              <option value="CV">Cape Verde</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">Central African Republic</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="TW">Chinese Taipei</option>
              <option value="CX">Christmas Island</option>
              <option value="CC">Cocos (Keeling) Islands</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CG">Congo</option>
              <option value="CD">Congo, the Democratic Republic of the</option>
              <option value="CK">Cook Islands</option>
              <option value="CR">Costa Rica</option>
              <option value="CI">Cote d&#39;Ivoire</option>
              <option value="HR">Croatia</option>
              <option value="CU">Cuba</option>
              <option value="CW">CuraÁao</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FK">Falkland Islands (Malvinas)</option>
              <option value="FO">Faroe Islands</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GF">French Guiana</option>
              <option value="PF">French Polynesia</option>
              <option value="TF">French Southern Territories</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Greece</option>
              <option value="GL">Greenland</option>
              <option value="GD">Grenada</option>
              <option value="GP">Guadeloupe</option>
              <option value="GT">Guatemala</option>
              <option value="GG">Guernsey</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HM">Heard Island and McDonald Islands</option>
              <option value="VA">Holy See (Vatican City State)</option>
              <option value="HN">Honduras</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran, Islamic Republic of</option>
              <option value="IQ">Iraq</option>
              <option value="IE">Ireland</option>
              <option value="IM">Isle of Man</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JE">Jersey</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="KP">Korea, Democratic People&#39;s Republic of</option>
              <option value="KR">Korea, Republic of</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Lao People&#39;s Democratic Republic</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libyan Arab Jamahiriya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MO">Macao</option>
              <option value="MK">Macedonia, the former Yugoslav Republic of</option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MQ">Martinique</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauritius</option>
              <option value="YT">Mayotte</option>
              <option value="MX">Mexico</option>
              <option value="MD">Moldova, Republic of</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="ME">Montenegro</option>
              <option value="MS">Montserrat</option>
              <option value="MA">Morocco</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands</option>
              <option value="NC">New Caledonia</option>
              <option value="NZ">New Zealand</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk Island</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PS">Palestinian Territory, Occupied</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines</option>
              <option value="PN">Pitcairn</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="QA">Qatar</option>
              <option value="RE">Reunion</option>
              <option value="RO">Romania</option>
              <option value="RU">Russian Federation</option>
              <option value="RW">Rwanda</option>
              <option value="BL">Saint BarthÈlemy</option>
              <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
              <option value="KN">Saint Kitts and Nevis</option>
              <option value="LC">Saint Lucia</option>
              <option value="MF">Saint Martin (French part)</option>
              <option value="PM">Saint Pierre and Miquelon</option>
              <option value="VC">Saint Vincent and the Grenadines</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Sao Tome and Principe</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SN">Senegal</option>
              <option value="RS">Serbia</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SG">Singapore</option>
              <option value="SX">Sint Maarten (Dutch part)</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="SB">Solomon Islands</option>
              <option value="SO">Somalia</option>
              <option value="ZA">South Africa</option>
              <option value="GS">South Georgia and the South Sandwich Islands</option>
              <option value="SS">South Sudan</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SD">Sudan</option>
              <option value="SR">Suriname</option>
              <option value="SJ">Svalbard and Jan Mayen</option>
              <option value="SZ">Swaziland</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="SY">Syrian Arab Republic</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania, United Republic of</option>
              <option value="TH">Thailand</option>
              <option value="TL">Timor-Leste</option>
              <option value="TG">Togo</option>
              <option value="TK">Tokelau</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="TC">Turks and Caicos Islands</option>
              <option value="TV">Tuvalu</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VE">Venezuela, Bolivarian Republic of</option>
              <option value="VN">Viet Nam</option>
              <option value="VG">Virgin Islands, British</option>
              <option value="WF">Wallis and Futuna</option>
              <option value="EH">Western Sahara</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
            </Select>

            <Input
              fieldName="email"
              maxLength={80}
              type="text"
              label="Email"
              required
            />

            <Select fieldName="00Nj0000002taVP" label="Where will this be used?">
              <option value="Hospital">Hospital</option>
              <option value="Pre-hospital">Pre-hospital</option>
              <option value="Government">Government</option>
              <option value="Commercial">Commercial</option>
            </Select>

            <Textarea
              fieldName="00Nj0000003XFXP"
              label="Notes"
            />

            <Button type="submit" name="submit">SUBMIT</Button>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  isMobile: state.mobilestate.isMobile,
});

ContactUs.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(ContactUs);
