import useForm from './hooks/useForm'

function LoginForm() {
    const { values, handleChange, handleSubmit, resetForm } = useForm({ username: '', password: '' }, submit)

    function submit(values) {
        console.log('Form submitted with values:', values)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={resetForm}>
                Reset
            </button>
        </form>
    );
}
export default LoginForm;