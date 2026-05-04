SET nome "Julia"

GET nome

SET mensagem "olﾠ" EX 10

TTL mensagem

DEL nome

EXISTS nome

HSET usuario:1 nome "Julia"

HSET usuario:1 email "Julia@email.com"

HGET usuario:1 nome

HGETALL usuario:1