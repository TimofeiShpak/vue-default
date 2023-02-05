const funcApi = api => {
    api.charts = {
        getCharts() {
            return api.request.get('/charts');
        },
    }
}

export default funcApi;