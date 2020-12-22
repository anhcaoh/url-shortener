const errorsHandler = (req, res, error) => {
    const _errorMessage = "Oops, something went wrong. Please try again later.";
    console.error(error && error.message || _errorMessage);
    res.json({ 
        hasError: true,
        message: (error && error.message) || _errorMessage,
        status: 500
    });
};

module.exports =  { errorsHandler };