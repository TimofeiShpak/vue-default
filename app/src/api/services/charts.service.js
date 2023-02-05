const funcApi = api => {
    api.charts = {
        getCharts(url) {
            return api.request.get('/'+url);
        },
    }
}

export default funcApi;