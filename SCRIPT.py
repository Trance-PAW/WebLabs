# Script para modificar el nombre de los archivos

import unicodedata

import os

def change_file_names_to_uppercase(path):
    array_ = []
    for root, dirs, files in os.walk(path):
       
        for lab_dir in dirs:

            tool_guide_pdf_path = os.path.join(root, lab_dir, 'tools_guides_pdf',)
            if lab_dir == 'lab_topografia':
                i = 0
                for filename in os.listdir(tool_guide_pdf_path):
                    i += 1

                    new_filename = filename.replace(' ', '_').upper()
                    file_path = os.path.join(tool_guide_pdf_path, filename)
                    
                    file_path = file_path[65:]
                    file_path = file_path.replace('\\','/')
                    file_name = file_path[46:]
                    file_name = file_name[:-4]
                    name_whitout = file_name.replace('_',' ')
                    file_without_character = unicodedata.normalize("NFKD", file_path).encode("ascii","ignore").decode("ascii")
                    file_without_character = os.path.join(tool_guide_pdf_path, file_without_character)
                    # print('Error')
                    # print(file_path + '           This  ' + file_without_character)

                    os.rename('public' + file_path, 'public'+ file_without_character)

                    estructura = {
                        file_name: file_without_character ,
                    }
                    print(estructura)
                    # print('\n')
                    # print(i)
                    # print(name_whitout)
                    # print(file_name)
                    # print(file_without_character)



if __name__ == "__main__":
    carpeta_public_nextjs = "/Users/isaaysosa/Desktop/GIT_HUB/laboratories_fing_uach_v1/public/laboratories"
    change_file_names_to_uppercase(carpeta_public_nextjs)


# Cambia el nombre de las guías a mayúsculas/

# import os

# def change_file_names_to_uppercase_and_replace_spaces(path):
#     for root, dirs, files in os.walk(path):
#         for lab_dir in dirs:
#             tool_guide_pdf_path = os.path.join(root, lab_dir, 'pdf')
#             if os.path.exists(tool_guide_pdf_path):
#                 for filename in os.listdir(tool_guide_pdf_path):
#                     file_path = os.path.join(tool_guide_pdf_path, filename)
#                     if os.path.isfile(file_path):
#                         # Cambiar espacios en blanco por guiones bajos y convertir a mayúsculas
#                         new_filename = filename.replace(' ', '_').upper()

#                         new_file_path = os.path.join(tool_guide_pdf_path, new_filename)
#                         os.rename(file_path, new_file_path)
#                         print(f'Cambiado nombre de {filename} a {new_filename}')

# if __name__ == "__main__":
#     carpeta_public_nextjs = "/Users/isaaysosa/Desktop/GIT_HUB/laboratories_fing_uach_v1/public/laboratories"
#     change_file_names_to_uppercase_and_replace_spaces(carpeta_public_nextjs)




# Cambia el nombre de las imagenes, ademas genera la lista con las rutas listas para copiar y pegar.
# import os

# def change_file_names_to_uppercase_and_replace_spaces(path):
#     i = 0
#     array = []
#     for root, dirs, files in os.walk(path):
#         for lab_dir in dirs:
#             images_path = os.path.join(root, lab_dir, 'images')
            
#             if lab_dir == 'lab_mineralogia' and os.path.exists(images_path):
#                 print(images_path)
#                 for filename in os.listdir(images_path):
#                     old = os.path.join(images_path, filename)
#                     i += 1
#                     name = 'IMG_LAB_MINERALOGIA_' + str(i) + os.path.splitext(filename)[1]
#                     name = name.upper()
#                     new_file_path = os.path.join(images_path, name)
#                     os.rename(old, new_file_path)
#                     new_file_path = new_file_path[72:]
#                     new_file_path = new_file_path.replace('\\','/')

#                     array.append(str(new_file_path))
#     print(array)



# if __name__ == "__main__":
#     carpeta_public_nextjs = "C:\\Users\\oungr\\OneDrive\\Desktop\\SERVICIO_SOCIAL\\LABORATORIOS_UACH\\public\\laboratories"
#     change_file_names_to_uppercase_and_replace_spaces(carpeta_public_nextjs)
