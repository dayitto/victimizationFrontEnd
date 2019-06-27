export const baseURL = 'http://localhost:8190/api';

export class AllConstants {

    public static readonly getStates = baseURL + '/states';

    public static readonly getVictimizations = baseURL + '/victimizations';

    public static readonly getVictimizationsByState = baseURL + '/victimizations/{idState}';

    public static readonly genericServerError = "Error de servidor";

}