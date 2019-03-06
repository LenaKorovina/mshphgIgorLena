import React from "react";


class CheckboxSelectComponent extends React.Component {
    state = {
        expanded: false
    };

    showCheckboxes = () => {
        if (!this.state.expanded) {
            this.setState({
                expanded: true
            })
        } else {
            this.setState({
                expanded: false
            })
        }
    };

    render() {
        if (!this.state.expanded) {
            return (<div>
                <form>
                    <div className="multiselect">
                        <div className="selectBox" onClick={this.showCheckboxes}>
                            <select>
                                <option>{this.props.selectName}</option>
                            </select>
                            <div className="overSelect"></div>
                            <div className="checkboxes none">
                                {this.props.items.split(" ").map((item, i) => <label><input type="checkbox"/>{item}</label>)}
                            </div>
                        </div>
                    </div>
                </form>
            </div>)
        } else {
            return (<div>
                <form>
                    <div className="multiselect">
                        <div className="selectBox" onClick={this.showCheckboxes}>
                            <select>
                                <option>{this.props.selectName}</option>
                            </select>
                            <div className="overSelect"></div>
                        </div>
                        <div className="checkboxes block">
                            {this.props.items.split(" ").map((item, i) => <label><input type="checkbox"/>{item}</label>)}
                        </div>
                    </div>
                </form>
            </div>)
        }
    }
}

export default CheckboxSelectComponent;