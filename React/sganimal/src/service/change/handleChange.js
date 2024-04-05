const handleChange = (name,set, campo ,value ) => {
    set({ ...name, [campo] : value });
};
export default handleChange;