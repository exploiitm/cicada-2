#include <stdio.h>

int main(int argc, char *argv[]) {

  FILE* fptr;
  
  if (!fptr) {
    printf("Failed to open file!\n");
    return 1; // or handle error
}
  
  fptr = fopen("/flag", "r");
  char flag[64] ;
  int s =10;
  int d = 12;
  int g = 13;
  char usrin[64]; 
  fgets(flag,64,fptr);
  fgets(usrin,64,stdin);
  printf(usrin);
  
  
  
  return 0;
}
