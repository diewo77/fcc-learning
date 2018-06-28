//https://learn.freecodecamp.org/front-end-libraries/react/use-array-filter-to-dynamically-filter-an-array

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    username: 'Jeff',
                    online: true
                },
                {
                    username: 'Alan',
                    online: false
                },
                {
                    username: 'Mary',
                    online: true
                },
                {
                    username: 'Jim',
                    online: false
                },
                {
                    username: 'Sara',
                    online: true
                },
                {
                    username: 'Laura',
                    online: true
                }
            ]
        }
    }
    render() {
        const usersOnline = this.state.users.filter(user => user.online)
        console.log(usersOnline)
        const renderOnline = usersOnline.map((val, ind) => <li key={ind}>{val.username}</li>)
        return (
            <div>
                <h1>Current Online Users:</h1>
                <ul>
                    {renderOnline}
                </ul>
            </div>
        );
    }
};