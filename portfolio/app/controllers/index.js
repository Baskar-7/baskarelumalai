import Controller from '@ember/controller';
import {action} from '@ember/object';
import $ from 'jquery';
import { set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
	
	 @tracked isloading;

  init() {
    super.init(...arguments);
    this.setupScrollListener();
  }

  @action
  updateStatusMessage(jsonData) {
    var statusMessage = {
      status: jsonData.status,
      message: jsonData.message,
      show: 'true',
    };
    set(this, 'statusMessage', statusMessage);
  }
@action
    handleScroll()
    {
        const header=document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

 @action
  setupScrollListener() {
    const element = window;
    element.addEventListener('scroll', this.handleScroll);
  }

  @action
  sendSMS(event) {
	
    event.preventDefault();
    const form = event.target;

    var values = "\n";

    form.querySelectorAll('input').forEach((input) => {
      if (input.type !== 'submit') {
        values += input.name + ": " + input.value.trim() + "\n";
      }
    });

    values += "message: " + document.getElementById('messagebox').value + "";


      var self=this;
         
     this.isloading = 'true';
    $.ajax({
        type: 'POST',
        url: 'https://api.twilio.com/2010-04-01/Accounts/AC8ab9831670563a6442d298896a7ac848/Messages.json',
        data: {
            "To": '+919080740652',
            "From": "+12176154006",
            "Body":  values
        },
        headers: {
            'Authorization': 'Basic ' + btoa('AC8ab9831670563a6442d298896a7ac848:45febcc3bcb68def723837aa5b2056bc')
        },
        success: function(data) {
            var data={
                status: "success",
                message: "Thank you for your response! I've received your message and will get back to you soon.",
            }
            self.updateStatusMessage(data);
            $('#contact-form')[0].reset();
			self.isloading = 'false';
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.error('Message could not be sent:', errorThrown);
            var data={
                status: "error",
                message: "Error occurred!!.. Pls try again after sometime",
            }
            self.updateStatusMessage(data)
			self.isloading = 'false';
        }
    });
	
  }

  @action
  viewScreenShots() {
    const url = 'https://baskarelumalai.vercel.app/project-screenshots';
    window.open(
      url,
      '_blank',
      `width=700,height=700,left=${(window.screen.width - 700) / 2},top=${
        (window.screen.height - 700) / 2
      }`
    );
  }

  @action
  checkMaxLength(maxlength, event) {
    var value = event.target.value;
    if (value.length > maxlength) {
      value = value.slice(0, maxlength);
      event.target.value = value;
    }
  }
}
