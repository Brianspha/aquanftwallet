<template>
  <v-container fluid style="padding-bottom: 5%; padding-top: 1%">
    <v-row justify="center" align="center">
      <v-card width="100%">
       <v-row justify="center" align="center" style="padding-bottom: 5%; padding-top: 5%">
          <v-app-bar absolute :color="$store.state.primaryColor" dark>
            <v-toolbar-title>{{$store.state.selectedCollectionOpensea.name}} collection</v-toolbar-title>
          </v-app-bar>
        </v-row>
        <v-card-text>
           <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="[
                    'Skiing',
                    'Ice hockey',
                    'Soccer',
                    'Basketball',
                    'Hockey',
                    'Reading',
                    'Writing',
                    'Coding',
                    'Basejump',
                  ]"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="$router.push('/home')">
            Back
          </v-btn>
          <v-btn
            :color="$store.state.primaryColor"
            text
            @click="$store.state.showOpenseaNFTDetailsDialog = false"
          >
            Bid
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row></v-container
  >
</template>

<script>
export default {};
</script>

<style></style>
