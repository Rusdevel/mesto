(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=document.querySelector(".popup_type_image"),n=t.querySelector(".popup__image"),r=t.querySelector(".popup__image-title"),o=function(){function t(e,n,r,o){var i=e.name,a=e.link,c=e.owner,u=e._id,l=e.likes,s=n.handleCardClick,f=n.handleCardDislike,p=n.handleCardLike,d=n.handleCardDelete;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=i,this._link=a,this.likes=l,this._owner=c._id,this._id=u,this._userId=o,this._cardSelector=r,this._openFullImage=s,this._like=".place-card__like-img",this._trash=".place-card__trash",this._image=".place-card__image",this._handleCardDislike=f,this._handleCardLike=p,this._handleCardDelete=d,this._element=this._getTemplateCard(),this._cardLikeElement=this._element.querySelector(this._like)}var o,i;return o=t,(i=[{key:"_setEventListners",value:function(){var e=this;this._element.querySelector(this._like).addEventListener("click",(function(){e._element.querySelector(e._like).classList.contains("place-card__like-img_active")?e._handleCardDislike(e._id):e._handleCardLike(e._id)})),this._element.querySelector(this._trash).addEventListener("click",(function(){return e._handleCardDelete(e._id,e._element)})),this._element.querySelector(this._image).addEventListener("click",(function(){return e._openFullImage(e._name,e._link)}))}},{key:"_getTemplateCard",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".place-card").cloneNode(!0)}},{key:"likeCard",value:function(){this._element.querySelector(this._like).classList.toggle("place-card__like-img_active")}},{key:"dislikeCard",value:function(){this._element.querySelector(this._like).classList.toggle("place-card__like-img_active")}},{key:"updateLikeCount",value:function(){this._element.querySelector(".place-card__like-info").textContent=this.likes.length}},{key:"_handleOpenPopup",value:function(){n.src=this._link,r.textContent=this._name,openCardPopup()}},{key:"generateCard",value:function(){var e=this;return this._setEventListners(),this.updateLikeCount(),this._element.querySelector(".place-card__image").src=this._link,this._element.querySelector(".place-card__title").textContent=this._name,this._element.querySelector(".place-card__image").alt=this._name,this._userId===this._owner&&this._element.querySelector(this._trash).classList.add("place-card__trash_active"),this.likes.forEach((function(t){t._id!==e._userId||e._element.querySelector(e._like).classList.toggle("place-card__like-img_active")})),this._element}}])&&e(o.prototype,i),t}(),i={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible",errorMessageNullInput:"Вы пропустили это поле.",errorMessageNullLink:"Введите адрес сайта.",popupСontainerAdd:"#popup__container_add",nameInputError:"#name__input-error",jobInputError:"#job-input-error",nameCardError:"#nameCard-error",urlError:"#url-error",wrongLenght:"Введено неверное количество символов"};function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"_shortTextError",(function(e){return r.erroText=r.formElement.querySelector("#".concat(e.id,"-error")),e.validity.valueMissing?(r.erroText.textContent=r.data.errorMessageNullInput,r.erroText.classList.add(r.data.errorClass),e.classList.add(r.data.inputErrorClass),!1):e.validity.tooShort||e.validity.tooLong?(r.erroText.textContent=r.data.wrongLenght,r.erroText.classList.add(r.data.errorClass),e.classList.add(r.data.inputErrorClass),!1):"url"!=e.type||e.validity.valid?(r.erroText.textContent="",r.erroText.classList.remove(r.data.errorClass),void e.classList.remove(r.data.inputErrorClass)):(r.erroText.textContent=r.data.errorMessageNullLink,e.classList.add(r.data.inputErrorClass),r.erroText.classList.add(r.data.errorClass),!1)})),a(this,"resetValidation",(function(){r.inputList.forEach((function(e){var t=r.formElement.querySelector("#".concat(e.id,"-error"));t.textContent="",t.classList.remove(r.data.errorClass),e.classList.remove(r.data.inputErrorClass),r._disableSubmitButton()}))})),a(this,"resetValidationFromProfile",(function(){r.inputList.forEach((function(e){var t=r.formElement.querySelector("#".concat(e.id,"-error"));t.textContent="",t.classList.remove(r.data.errorClass),e.classList.remove(r.data.inputErrorClass),r.buttonElement.classList.remove(r.data.inactiveButtonClass),r.buttonElement.disabled=!1}))})),a(this,"_hasInvalidInput",(function(){return r.inputList.some((function(e){return!e.validity.valid}))})),a(this,"_changeButtonSwitch",(function(){r._hasInvalidInput()?r._disableSubmitButton():(r.buttonElement.classList.remove(r.data.inactiveButtonClass),r.buttonElement.disabled=!1)})),a(this,"enebleValidation",(function(){r.inputList.forEach((function(e){e.addEventListener("input",(function(){r._shortTextError(e),r._changeButtonSwitch()}))}))})),a(this,"_disableSubmitButton",(function(){r.buttonElement.classList.add(r.data.inactiveButtonClass),r.buttonElement.disabled=!0})),this.formElement=n,this.data=t,this.inputList=Array.from(this.formElement.querySelectorAll(this.data.inputSelector)),this.buttonElement=this.formElement.querySelector(this.data.submitButtonSelector)};function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=n,this._renderer=r}var t,n;return t=e,(n=[{key:"renderer",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e,t){this._container[t](e)}}])&&u(t.prototype,n),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._jobName=n,this._avatar=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,jobName:this._jobName.textContent,id:this._id,avatar:this._avatar}}},{key:"setUserInfo",value:function(e,t,n){e&&(this._name.textContent=e),t&&(this._jobName.textContent=t),n&&(this._id=n)}},{key:"setAvatar",value:function(e){e&&(this._avatar.src=e)}},{key:"getId",value:function(){return this._id}}])&&s(t.prototype,n),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),d(this,"_closePopupsOverlay",(function(e){e.target.classList.contains("popup")&&n.close()})),d(this,"renderLoading",(function(e){n._submitButton.textContent=e?"Сохранение...":"Сохранить"})),this.selectorElement=t,this.element=document.querySelector(this.selectorElement),this._handleEscClose=this._handleEscClose.bind(this),this._submitButton=this.element.querySelector(".popup__button")}var t,n;return t=e,(n=[{key:"setEventListeners",value:function(){var e=this,t=this.element.querySelector(".popup__close");document.addEventListener("click",this._closePopupsOverlay),t.addEventListener("click",(function(){e.close()}))}},{key:"close",value:function(){this.element.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"open",value:function(){this.element.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}}])&&p(t.prototype,n),e}();function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e,t){var n,r=t.handlerSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._form=n.element.querySelector(".popup__form"),n._handlerSubmit=r,n._popupButton=n.element.querySelector(".popup__button"),n}return t=a,(n=[{key:"_getInputValues",value:function(){return this._data=Object.fromEntries(new FormData(this._form)),this._data}},{key:"setEventListeners",value:function(){var e=this;m(k(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e.renderLoading(!0),e._handlerSubmit(e._getInputValues())}))}},{key:"close",value:function(){m(k(a.prototype),"close",this).call(this),this._form.reset(),this._popupButton.classList.add("popup__button_disabled"),this._popupButton.disabled=!0}}])&&y(t.prototype,n),a}(h);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return(S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._pupupImageCard=t.element.querySelector(".popup__image"),t._popupImageTitle=t.element.querySelector(".popup__image-title"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._pupupImageCard.src=n,this._pupupImageCard.alt=t,this._popupImageTitle.textContent=t,S(O(a.prototype),"open",this).call(this)}}])&&E(t.prototype,n),a}(h);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=t.headers,this._url=t.url}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._checkRes)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._checkRes)}},{key:"editeUserDate",value:function(e,t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkRes)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkRes)}},{key:"getNewCards",value:function(e,t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkRes)}},{key:"cardDelete",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkRes)}},{key:"setLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkRes)}},{key:"removeLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkRes)}},{key:"_checkRes",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}}])&&q(t.prototype,n),e}();function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t,n){return(T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function a(e,t){var n,r=t.submitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitHandler=r,n._submitButton=n.element.querySelector(".popup__button"),n}return t=a,(n=[{key:"open",value:function(e,t){T(D(a.prototype),"open",this).call(this),this._cardId=e,this.сardElement=t}},{key:"deleteCard",value:function(){this.сardElement.remove()}},{key:"setEventListeners",value:function(){var e=this;T(D(a.prototype),"setEventListeners",this).call(this),this._submitButton.addEventListener("click",(function(t){t.preventDefault(),e._submitHandler(e._cardId)}))}}])&&R(t.prototype,n),a}(h),A=document.querySelector(".popup__form_add-form"),U=document.querySelector(".profile__button"),V=document.querySelector(".profile__edit-button"),H=document.querySelector(".popup_type_edit-profile"),F=document.querySelector(".popup__form_profile"),M=document.querySelector(".profile__avatar-button"),J=document.querySelector(".popup__form_avatar"),z=H.querySelector(".popup__form"),G=(document.querySelector(".popup_type_image"),document.querySelector(".places-list")),K=z.querySelector(".popup__input_type_name"),Q=z.querySelector(".popup__input_type_job"),W=new c(i,F),X=new c(i,A),Y=new c(i,J);W.enebleValidation(),X.enebleValidation(),Y.enebleValidation();var Z=new P({url:"https://mesto.nomoreparties.co/v1/".concat("cohort-28"),headers:{authorization:"f77a7956-a5a9-4ad6-a04a-920b557c7dfd","Content-Type":"application/json"}}),$=new g(".popup_type_edit-profile",{handlerSubmit:function(e){Z.editeUserDate(K.value,Q.value).then((function(e){ie.setUserInfo(e.name,e.about),$.close()})).finally((function(){$.renderLoading(!1)})).catch((function(e){console.log(e)}))}}),ee=new g(".popup_type_update-avatar",{handlerSubmit:function(e){var t=e.link;Z.updateAvatar(t).then((function(e){e.res,ie.setAvatar(t),ee.close()})).finally((function(){ee.renderLoading(!1)})).catch((function(e){console.log(e)}))}});ee.setEventListeners(),M.addEventListener("click",(function(){return ee.open()})),document.querySelector(".popup_type_delete-card");var te=new N(".popup_type_delete-card",{submitHandler:function(e){Z.cardDelete(e).then((function(e){te.deleteCard(),te.close()})).catch((function(e){console.log(e)}))}});te.setEventListeners();var ne=new j(".popup_type_image");ne.setEventListeners();var re=function(e){var t=ie.getId(),n=new o(e,{handleCardClick:function(e,t){ne.open({name:e,link:t})},handleCardDelete:function(e,t){te.open(e,t)},handleCardLike:function(e){Z.setLike(e).then((function(e){var t=e.likes;n.likes=t,n.likeCard(),n.updateLikeCount()})).catch((function(e){console.log(e)}))},handleCardDislike:function(e){Z.removeLike(e).then((function(e){var t=e.likes;n.likes=t,n.dislikeCard(),n.updateLikeCount()})).catch((function(e){console.log(e)}))}},"#templateCard",t);return n.generateCard()},oe=new l({renderer:function(e){var t=re(e);oe.addItem(t,"append")}},G),ie=new f(document.querySelector(".profile__name"),document.querySelector(".profile__job"),document.querySelector(".profile__avatar"));$.setEventListeners();var ae=new g(".popup_type_edite-card",{handlerSubmit:function(e){Z.getNewCards(e.name,e.link).then((function(e){var t=re(e);oe.addItem(t,"prepend"),ae.close()})).finally((function(){ae.renderLoading(!1)})).catch((function(e){console.log(e)}))}});ae.setEventListeners(),U.addEventListener("click",(function(){var e;W.resetValidationFromProfile(),e=ie.getUserInfo(),K.value=e.name,Q.value=e.jobName,$.open()})),V.addEventListener("click",(function(){X.resetValidation(),ae.open()})),Promise.all([Z.getUserInfo().then((function(e){ie.setUserInfo(e.name,e.about,e._id),ie.setAvatar(e.avatar)})).catch((function(e){console.log(e)})),Z.getInitialCards().then((function(e){oe.renderer(e)})).catch((function(e){console.log("что то не так")}))]).catch((function(e){return console.log(e)}))})();