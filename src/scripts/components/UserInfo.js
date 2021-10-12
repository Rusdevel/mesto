export class UserInfo {
    constructor(name, jobName, avatar) {
      this._name = name;
      this._jobName = jobName;
      this._avatar = avatar;
    }

    getUserInfo() {
      const name = this._name.textContent;
      const jobName = this._jobName.textContent;
      const id = this._id;
      const avatar = this._avatar;
      return {name, jobName, id, avatar};
    };

    setUserInfo(name, about, id) {
      if (name) {this._name.textContent = name;}
      if (about) {this._jobName.textContent = about;}
      if (id) { this._id = id;}
      
    };

    setAvatar(link) {
      if (link) {this._avatar.src = link}
    };

    getId() {
      return this._id;
    }
}