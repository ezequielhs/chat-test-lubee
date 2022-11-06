import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allChats: [],
            DataIsLoaded: false
        };
    }

    componentDidMount() {
        fetch("https://api.coloredstrategies.com/contacts")
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                allChats: data.data,
                DataIsLoaded: true
            });
        }) 
    }

    render() {
        return (
            <div className="main__chatlist">
                <div className="chatlist__heading">
                    <h2>Contacts</h2>
                    <button className="btn-nobg">
                        <i className="fa fa-ellipsis-h"></i>
                    </button>
                </div>
                <div className="chatList__search">
                    <div className="search_wrap">
                        <input type="text" placeholder="Search Here" required />
                        <button className="search-btn">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="chatlist__items">
                    {this.state.allChats.map((item, index) => {
                        return (
                            <ChatListItems
                                name={item.title}
                                key={item.id}
                                animationDelay={index + 1}
                                active={item.active ? "active" : ""}
                                isOnline={item.isOnline ? "active" : ""}
                                image={item.img}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}