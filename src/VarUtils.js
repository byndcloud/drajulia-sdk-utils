export default class VarUtils {
    /**
     *
     * @param {String} completeVarName The complete name for this variable which is contained in the docx file. Ex.: {{varName}}
     */
    getVarName(completeVarName) {
        if (completeVarName.startsWith('_gen')) {
            let {
                groups: { variavel },
            } = /_gen(?<variavel>.+)\[\[(?<fem>.+)\]\].*\[\[(?<masc>.+)\]\].*/gm.exec(
                completeVarName
            );
            variavel = variavel.trim();
            return variavel;
        } else if (completeVarName.startsWith('_num')) {
            let variavel;
            if (completeVarName.endsWith('Extenso')) {
                variavel = completeVarName.substring(4, completeVarName.length - 7);
            } else {
                variavel = completeVarName.substring(4, completeVarName.length);
            }
            variavel = variavel.trim();
            return variavel;
        } else if (completeVarName.startsWith('_real')) {
            let variavel;
            if (completeVarName.endsWith('Extenso')) {
                variavel = completeVarName.substring(5, completeVarName.length - 7);
            } else {
                variavel = completeVarName.substring(5, completeVarName.length);
            }
            variavel = variavel.trim();
            return variavel;
        } else if (completeVarName.startsWith('_dat')) {
            let variavel;
            if (completeVarName.endsWith('Extenso')) {
                variavel = completeVarName.substring(4, completeVarName.length - 7);
            } else {
                variavel = completeVarName.substring(4, completeVarName.length);
            }
            variavel = variavel.trim();
            return variavel;
        } else if (completeVarName.startsWith('_sel')) {
            let {
                groups: { variavel, valor },
            } = /_sel(?<variavel>.+)_(?<valor>.+)_.+/gm.exec(completeVarName);
            variavel = variavel.trim();
            return variavel;
        } else if (
            completeVarName.startsWith('IMAGE') &&
            completeVarName.endsWith('()')
        ) {
            const {
                groups: { variavel },
            } = /IMAGE\s+(?<variavel>.+)[(][)]/gm.exec(completeVarName);
            return variavel;
        } else if (completeVarName.startsWith('_cpf')) {
            let variavel = completeVarName.replace(/\s+/g, '');
            return variavel;
        } else if (completeVarName.startsWith('_tel')) {
            let variavel = completeVarName.replace(/\s+/g, '');
            return variavel;
        } else if (completeVarName.startsWith('_cep')) {
            let variavel = completeVarName.replace(/\s+/g, '');
            return variavel;
        } else if (completeVarName.startsWith('@tabela')) {
            let variavel = completeVarName
                .substring(7, completeVarName.length)
                .trim();
            return variavel;
        } else if (completeVarName.startsWith('@topic')) {
            let variavel = completeVarName
                .substring(6, completeVarName.length)
                .trim();
            return variavel;
        } else {
            return completeVarName;
        }
    }
}
