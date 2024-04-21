import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ProjectScreenshotsController extends Controller {
  @tracked home_slideIndex;
  @tracked profile_sliIndex;

  @action
  init() {
    super.init(...arguments);
    this.home_slideIndex = 1;
    this.profile_sliIndex = 1;
  }

  @action
  plusDivs(n, classname) {
    var index =
      classname == 'home_page'
        ? (this.home_slideIndex += n)
        : (this.profile_sliIndex += n);
    this.showDivs(index, classname);
  }

  @action
  currentDiv(n, classname) {
    var index =
      classname == 'home_page'
        ? (this.home_slideIndex = n + 1)
        : (this.profile_sliIndex = n + 1);
    this.showDivs(index, classname);
  }

  @action
  showDivs(slideIndex, classname) {
    let i;
    let slides = document.getElementsByClassName(classname + '_slides');
    let dots = document.getElementsByClassName(classname + '_dots');

    if (slideIndex > slides.length) {
      classname == 'home_page'
        ? (this.home_slideIndex = 1)
        : (this.profile_sliIndex = 1);
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      classname == 'home_page'
        ? (this.home_slideIndex = slides.length)
        : (this.profile_sliIndex = slides.length);
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  }
}
