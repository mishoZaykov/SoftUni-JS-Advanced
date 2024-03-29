function attachEventsListeners() {
    const button = document.getElementById('convert');
    button.addEventListener('click', onClick);

    let metricUnits = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    function onClick(event) {
        const fromValue = document.getElementById('inputUnits').value;
        const toValue = document.getElementById('outputUnits').value;

        const inputDistance = Number(document.getElementById('inputDistance').value);
        const outputDistance = document.getElementById('outputDistance');

        let valueInMeters = inputDistance * metricUnits[fromValue];
        let convertedVlue = valueInMeters / metricUnits[toValue];
        outputDistance.value = convertedVlue;
    }
}