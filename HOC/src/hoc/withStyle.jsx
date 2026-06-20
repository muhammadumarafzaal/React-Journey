function withStyle(WrappedComponent) {
    return function EnhancedComponent(props) {
        return (
            <div style={{ backgroundColor: "yellow", padding: "10px", margin: "10px", borderRadius: "10px", border: "2px solid black" }}>
                <WrappedComponent {...props} />

            </div>
        )
    }
}
export default withStyle
