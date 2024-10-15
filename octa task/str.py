def character_frequency(s1):
    # Dictionary to store character frequencies
    frequency = {}
    
    # Count frequencies
    for char in s1:
        if char in frequency:
            frequency[char] += 1
        else:
            frequency[char] = 1
    
    # Get characters sorted alphabetically
    sorted_characters = sorted(frequency.keys())
    
    # Format the output
    result = []
    for char in sorted_characters:
        result.append(f"['{char}', {frequency[char]}]")
    
    # Print the result as a single line
    print(" ".join(result))

# Example usage
s1 = input().strip()
character_frequency(s1)