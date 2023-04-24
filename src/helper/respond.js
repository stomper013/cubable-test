const resSuccess = (res, data) => {
    return res.json({success: true, data})
}

const resError = (res, error) => {
    return res.json({success: false, error})
}

module.exports = {
    resError,
    resSuccess,
}