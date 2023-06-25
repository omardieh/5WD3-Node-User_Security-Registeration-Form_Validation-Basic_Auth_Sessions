## Can a hashed password be decrypted?

https://stackoverflow.com/questions/16635159/how-to-decrypt-this-password-hash

## CURL (Client URL) and Command loops

- curl example :

```
curl https://www.google.com/
```

- making a loop with git bash command shell :

```
for((i = 0; i < 10; i++)); do echo "iteration $i"; done
```

- saving file to be executed using filename.sh :
  the `chmod +x filename` command adds the execute permission to the file, allowing it to be executed as a program. Run the script using: `./filename.sh`

## using bcryptjs library

Hashing in Action: Understanding bcrypt
https://auth0.com/blog/hashing-in-action-understanding-bcrypt/

# SECOND

Node User Registration basic-auth folder

# THIRD

Node Form Validation

- Let's break down the regular expression /^\S+@\S+\.\S+$/ into simpler terms:

/ and /: The forward slashes mark the beginning and end of the regular expression.

^ and $: The caret (^) represents the start of the string, and the dollar sign ($) represents the end of the string. Together, they ensure that the entire string matches the pattern from start to end, without any additional characters before or after.

\S+: \S matches any non-whitespace character, and the + means one or more occurrences. So, \S+ matches one or more non-whitespace characters.

@: This matches the at symbol "@" literally. It is used to separate the username part from the domain part in an email address.

\.: This matches a period (dot) character "." literally. It is used to separate the domain name from the top-level domain (TLD) in an email address.

\S+: Similar to the previous explanation, this matches one or more non-whitespace characters. In this case, it matches the TLD part of the email address.

# fourth

Basic Authentication
Sign up and login user
Save cookie and pass it to client

# fifth

Middleware
