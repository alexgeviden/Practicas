from lxml import etree
import os
print(os.getcwd())
# Directorio actual del script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Rutas absolutas a los archivos
xml_file = os.path.join(script_dir, 'datos.xml')
xsd_file = os.path.join(script_dir, 'datos.xsd')

def validar_xml_con_xsd(xml_file, xsd_file):
    # Parsear el esquema XSD
    with open(xsd_file, 'rb') as f:
        xsd_doc = etree.parse(f)
        schema = etree.XMLSchema(xsd_doc)

    # Parsear el documento XML
    with open(xml_file, 'rb') as f:
        xml_doc = etree.parse(f)

    # Validar el documento XML contra el esquema
    is_valid = schema.validate(xml_doc)
    if is_valid:
        print("El documento XML es válido según el esquema XML.")
    else:
        print("El documento XML NO es válido según el esquema XML.")
        print("Errores de validación:")
        for error in schema.error_log:
            print(error)

# Archivos XML y XSD a validar
xml_file = 'datos.xml'
xsd_file = 'datos.xsd'


# Validar el documento XML con el esquema XML
validar_xml_con_xsd(xml_file, xsd_file)
