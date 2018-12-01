import * as React from "react";

interface StatBlockHeaderProps {
    name: string;
    type: string;
    source: string;
    imageUrl?: string;
}

interface StatBlockHeaderState {
    portraitSize: "thumbnail" | "full";
}

export class StatBlockHeader extends React.Component<StatBlockHeaderProps, StatBlockHeaderState> {
    constructor(props) {
        super(props);
        this.state = { portraitSize: "thumbnail" };
    }

    public render() {
        let header = <div className="c-statblock-header">
            <h3 className="Name">{this.props.name}</h3>
            <div className="Source">{this.props.source}</div>
            <div className="Type">{this.props.type}</div>
        </div>;

        if (this.props.imageUrl) {
            header = <div className={`c-statblock-header__with-portrait--${this.state.portraitSize}`}>
                <img className={`c-statblock-header__portrait`} onClick={this.togglePortraitSize} src={this.props.imageUrl} />
                <h3>{header}</h3>
            </div>;
        }

        return header;
    }

    private togglePortraitSize = () => {
        if (this.state.portraitSize == "thumbnail") {
            this.setState({ portraitSize: "full" });
        } else {
            this.setState({ portraitSize: "thumbnail" });
        }
    }
}
