import React, { Component, createRef } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItems = [
    
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItems,
      msg: "",
    };
  }

  render() {
    return (
        <div className="main__chatcontent">
            <div className="content__header">
                <div className="blocks">
                    <div className="current-chatting-user">
                    <Avatar/>
                    <p>Linn Ronning</p>
                    </div>
                </div>
            </div>
            <div className="content__body">
                <div className="chat__items">
                    {this.state.chat.map((item, index) => {
                    return (
                        <ChatItem
                            animationDelay={index + 2}
                            key={item.key}
                            user={item.type ? item.type : "me"}
                            msg={item.msg}
                            image={item.image}
                        />
                    );
                    })}
                    <div ref={this.messagesEndRef} />
                </div>
            </div>
            <div className="content__footer">
                <div className="sendNewMessage">
                    <button className="addFiles">
                      <i className="fa fa-plus"></i>
                    </button>
                    <input
                      type="text"
                      placeholder="Type a message here"
                      onChange={this.onStateChange}
                      value={this.state.msg}
                    />
                    <button className="btnSendMsg" id="sendMsgBtn">
                      <i className="fa fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
    );
  }
}