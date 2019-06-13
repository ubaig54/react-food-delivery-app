const update_user = (user) => {
    return {
        type: "SET_USER",
        data: user
    }
}

const remove_user = () => {
    return {
        type: "REMOVE_USER"
    }
}

export {
    update_user,
    remove_user
}