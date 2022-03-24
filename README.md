# feedbacky-react-component

Feedbacky is a react component library that can be used for collecting feedback from users as a text then sending it to
database.

## To Implement Feedbacky

```shell
npm i react-lib-feedbacky
```

## To Import Feedbacky As Default

```javascript
import {Feedbacky} from "react-lib-feedbacky";

export default function App() {
    const props = {
        applicationId: "TEST",
        fontColor: "#fff",
        formButtonText: "SEND",
        formButtonColor: "#f37919",
        formButtonTextColor: "#000000",
        modalBackgroundColor: "#ffffff",
        formTitle: "SEND YOUR FEEDBACK",
        responseTitle: "WE HAVE GOT YOUR FEEDBACK",
        responseTitleColor: "#1d851d",
        feedbackyApiUrl: "https://feedbacky-api-go.herokuapp.com/feedback",
    };

    return (
        <div className="App">
            <Feedbacky {...props} />
        </div>
    );
}
```

## Documentation

| Props*               | Description |
|----------------------| ----------- |
| applicationId        | Application ID or name where feedbacks come from
| fontColor            | Font color for the form
| formButtonText       | Submit form button text
| formButtonColor      | Submit form button color
| formButtonTextColor  | Submit form button text color
| modalBackgroundColor | Modal background color
| formTitle            | Title for the requested message
| responseTitle        | Title for the response message
| responseTitleColor   | Color for response title
| feedbackyApiUrl   | Api Url for the feedbacky app

*all props are default as string.

