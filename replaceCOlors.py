import os

# Hardcoded directories
directories = [
     "E:/Development/BurningNotesPWA/"
  
]

# List of directories to exclude
exclude_dirs = [
    "E:/Development/BurningNotesPWA/src/components/ui",
]

def replace_word_in_files(directory):
    word_to_replace = "BurningNotes"
    replacement_word = "Mistwrite"
    
    for root, dirs, files in os.walk(directory):
        # Exclude directories
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        
        for file in files:
            file_path = os.path.join(root, file)
            
            try:
                with open(file_path, 'r') as f:
                    content = f.read()
                
                new_content = content.replace(word_to_replace, replacement_word)
                
                with open(file_path, 'w') as f:
                    f.write(new_content)
                
                print(f"Replaced '{word_to_replace}' with '{replacement_word}' in {file_path}")
            
            except Exception as e:
                print(f"Error processing {file_path}: {str(e)}")

def main():
    for directory in directories:
        replace_word_in_files(directory)

if __name__ == "__main__":
    main()
